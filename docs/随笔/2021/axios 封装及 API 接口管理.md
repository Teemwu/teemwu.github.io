---
title: axios 封装及 API 接口管理
author: teemwu
date: 2021/09/23 12:12
isPublished: true
categories:
tags:
---

# axios 封装及 API 接口管理

## 前言

最近在跟后端对接请求的加解密时，发现之前封装的 axios 模块存在触发两次拦截器的问题，找了许久问题方才发现是 axios 没有实例化而直接使用造成的。溯其根源，是之前封装时并未仔细去看 axios 的文档，没完全理解代码，直接就参考别人封装好的例子，殊不知别人封装的也是不完善。因此，结合自己的项目，梳理下 axios 的封装及 API 接口的管理模块。

## Axios 封装

axios 本身就是封装好了的请求库，为什么我们要对其进行二次封装呢？这个原因很简单，和大多数的封装一样，目的是为了简化代码使用以及便于管理维护。

### 安装

```bat
npm install axios
// or
yarn add axios

```

### 使用

官方的文档一开始就列举了直接引入 axios 使用的方法，然而这样子对我们进行后面的个性化定制不利，所以我们需要进行实例话后再使用，防止重复触发拦截器。

```javascript
// request.ts
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'

// 判断是否为开发模式
const isDev = process.env.NODE_ENV === 'development'
// 根据不同环境设置不同的请求地址
const baseURL = isDev ? '' : 'http://www.example.com'
// 请求超时设置
const timeout = 6000
// 创建 axios 实例
const http = axios.create({ baseURL, timeout })

// TODO: 拦截器

export { http, axios }
```

### 拦截器

在请求数据前和请求数据后我们通常需要做一些认证、错误处理、加解密等操作，利用 axios 提供的 `interceptors` 方法分别对请求和响应进行拦截处理。

```javascript
// 拦截请求
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO: 请求加密

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 拦截响应
http.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response) {
      // 返回文件类型时不做处理直接返回
      if (response.request.responseType === 'arraybuffer') return response

      const { code, msg, success } = response.data

      // TODO: 解密响应数据

      // 根据后端自定义的状态码进行操作
      switch (code) {
        case 7001:
          // TODO
          break
        default:
          // Pop message
          break
      }
    }

    return Promise.reject(response)
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status, data } = error.response
      // 处理 HTTP 状态码
      switch (status) {
        case 401:
          // TODO: Login
          break
        default:
          // TODO: Pop message
          break
      }
    }

    return Promise.reject(error)
  }
)
```

以上只是简单列举了拦截器的使用，还有加解密、Loading 控制、请求超时处理等需要另外补充。

### 封装

通常情况下我们可以直接使用 axios 的实例方法来调用 get、post 等请求，假如后端返回数据的默认结构为：

```javascript
{
  code: 200,
  success: true,
  data: {},
  msg: '请求成功'
}
```

正常处理请求返回数据如下：

```javascript
import { http } from './request'

http.get('/path', { id: 1 }).then(response => {
  const { data, code, success, msg } = response.data

  if (success) {
    // TODO: 处理获取成功的数据
  } else {
    // TODO: 错误处理
  }
})
```

而通常情况下，我们请求数据只想手动处理页面显示所需的数据，那些异常的数据应该全部放到 catch 中处理或者交由全局进行统一处理，比如：

```javascript
import { http } from './request'

// 处理特殊异常
http.get('/path', { id: 1 }).then(res => {
  // TODO: 处理获取成功的数据
}).catch(err => {
  // TODO: 处理异常
})

// 不使用 catch 时
// 异常交由全局默认处理
http.get('/path', { id: 1 }).then(res => {
  // TODO: 处理获取成功的数据
})
```

要默认处理异常，需要重写 Promise 的 `then` , `catch` , `finally` 方法：

```javascript
function RequestPromise(originalPromise: Promise<any>) {
  this._promise = originalPromise

  this._catchyPromise = Promise.resolve()
    .then(() => this._promise)
    .catch(err => console.error('Error', err)) // 默认处理异常

  const methods = ['then', 'catch', 'finally']

  for (const method of methods) {
    this[method] = function (...args: any) {
      this._promise = this._promise[method](...args)

      return this
    }
  }
}
```

从上面的方法可知，我们的异步请求会被拦截一道，获取异常并进行错误输出处理，重写了 catch 方法，方便使用时能进行特殊处理。

```javascript
// get 请求封装
const get = <R = any>(uri: string, data?: any, config?: AxiosRequestConfig): Promise<R> => {
  // @ts-ignore
  return new RequestPromise(new Promise((resolve, reject) => {
    http
      .get(uri, { params: data, ...config })
      .then(response => {
        const { success, data } = response.data
        if (success) return resolve(data)
        return reject(response.data)
      })
      .catch(reject)
  }))
}
```

除了以上处理，假设我们要请求分页列表，其后端返回的数据格式为：

```javascript
{
  code: 200,
  success: true,
  data: {
    results: []
  },
  msg: '请求成功'
}
```

如果想默认返回 `results` 字段内容，我们可以在 post、get 请求方法的基础上更进一步定制化请求方法，如：

```javascript
// 列表请求封装
const table = <R = ListResponse>(path: string, pagination?: number, data?: any, config?: AxiosRequestConfig): Promise<R> => {
  return new Promise((resolve, reject) => {
    const listConfig = {
      pageSize: 10,
      pageNo: pagination || 1
    }
    uri = `${uri}/action/table`
    get(uri, Object.assign({}, listConfig, data), config).then(data => resolve(data.results)).catch(reject)
  })
}
```

其实，如果是做管理后台系统，可以根据以上实例对常用的增删查改进行封装，调用时可大大节省时间。

### 挂载全局

考虑到会污染全局实例且不便于维护对接，很多人是不推荐挂载请求方法到全局实例上的，这些见仁见智吧。如果抛开不利因素，只为了在页面中便捷地使用，可以将封装好的请求方法绑定到全局。具体做法如下：

```javascript
// main.js or main.ts

// Vue 2.x
import Vue from 'vue'

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$table = table

// Vue 3.x
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$get = get
app.config.globalProperties.$post = post
app.config.globalProperties.$table = table
```

在页面中使用：

```javascript
// xxx.vue

// Vue 2.x
this.$post()

// Vue 3.x
const { proxy } = getCurrentInstance()

proxy.$post()
```

如果项目中使用了 typescript ，为了能智能提示，需要在项目根目录增加声明文件：

```javascript
// request.d.ts
import { AxiosInstance, AxiosRequestConfig } from 'axios'

declare module 'vue/types/vue' {
  interface Vue {
    $post<R = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>
    $get<R = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>
    $table<R = any>(uri: string, pagination?: number, data?: any, config?: AxiosRequestConfig): Promise<R>
  }
}
```

## API 接口管理

如果我们将请求方法挂载到了全局，只要新建一个文件来管理请求的接口，在要使用的页面引入对应接口即可。

```javascript
// api.ts
export const ACCOUNT = {
  logout: 'account/logout',
  login: 'account/login'
}
```

在页面配合请求方法进行使用：

```javascript
import { ACCOUNT } from '@/config/api'

this.$post(ACCOUNT.logout).then(() => {
  // TODO
}
```

这样子，请求和接口就完全分离了。再想想，还有哪里写得不爽的？在使用的过程中，发现接口定义的时候总是要手动去命名，接口少还能接受，但是接口很多的情况下命名就是一件相当头疼的事。可为了能够使用 typescript 的智能提示功能，命名又是必要的。思前想后，最后通过 nodeJS 进行自动化生成接口文件，自动命名。用的时候在配置文件配置下就好，配置文件如下：

```javascript
// config/api.js
/**
 * 接口配置文件
 * 接口名称:[ 接口前缀, ...业务路径 ]
 */
module.exports = {
  account: [
    'account',
    'logout',
    'login'
  ]
}
```

为了能够实现自动更新，使用 `nodemon` 对 `config/api.js` 文件进行监听。文件更改时会自动执行生成脚本，具体的自动生成脚本可以根据自己要输出的接口结构进行定制。

```javascript
// build/api.js
// 接口生成脚本

const path = require('path')
const chalk = require('chalk')
const fs = require('fs-extra')
const api = require('../config/api')

const resolve = dir => {
  return path.join(__dirname, '..', dir)
}

/**
 * 生成 API 文件
 * 路径：src/api/index.ts
 */
function initAPI() {
  let tmpStr = ''

  for (let key in api) {
    let uri = ''
    let str = `export const ${key.toUpperCase()} = {\n`

    const comma = index => api[key].length - 1 !== index ? ',' : ''

    api[key].forEach((item, index) => {
      const _key = key.toLowerCase()
      if (!index) {
        uri = item
        str = `const ${_key} = '${uri}/'\n` + str
        str += `  uri: ${_key}${comma(index)}\n`
      } else {
        str += `  ${item.replace(/(\/|\-)/g, '_')}: ${_key} + '${item}'${comma(index)}\n`
      }
    })
    str += '}\n\n'
    tmpStr += str
  }

  return tmpStr
}

const apiPath = resolve('src/api/index.ts')

const status = fs.outputFileSync(apiPath, initAPI())

if (status) {
  throw status
} else {
  console.log(chalk.blue('生成') + '  接口文件  ' + apiPath);
}
```

当然这种做法也是为了偷懒，如果有更好的做法欢迎留言讨论。需要注意的是，如果通过 nodeJS 动态生成接口，需要在 `.gitignore` 中排除掉生成文件的提交，否则会产生提交冲突。

## 总结

不管是小程序、H5 还是管理系统，请求封装还是很有必要的，倘若能统一，能在各个项目中复用那就再好不过了。接口管理不仅在项目中管理，使用时还需要配合接口文档，项目中知道这个接口属于那个模块下就好。