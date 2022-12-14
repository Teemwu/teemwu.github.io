---
title: Vitepress 和 Github Pages 搭建个人博客
author: Teemwu
date: '2022/10/02 21:29'
isPublished: true
categories:
  - 建站
tags:
  - Github
  - VitePress
wordCount: 908
---

# Vitepress 和 Github Pages 搭建个人博客

## Vitepress

### 新建项目

```bash
mkdir vitepress-starter && cd vitepress-starter
```

```bash
pnpm init
```

```bash
pnpm i vitepress vue -D
```

在 `docs` 目录下新增文章（.md）文件

```bash
mkdir docs && echo '# Hello VitePress' > docs/index.md
```

增加执行脚本 `package.json`

```bash
{
  ...
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "serve": "vitepress serve docs"
  },
  ...
}
```

执行脚本即可运行

```bash
pnpm docs:dev
```

添加 `.gitignore` 文件，防止提交多余文件

```
node_modules
.DS_Store
.vscode
pnpm-global
*.log
/docs/.vitepress/dist
```

## 部署到 Github Pages

### Github 新建空白仓库

仓库名: `你的 GitHub 名`.github.io

创建完之后在本地 vitepress 项目中新增部署文件 `.github/workflows/deploy.yml`

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - uses: pnpm/action-setup@v2.0.1
        name: Install pnpm
        id: pnpm-install
        with:
          version: 7
          run_install: false

      - name: Get pnpm store directory
        id: pnpm-cache
        run: |
          echo "::set-output name=pnpm_cache_dir::$(pnpm store path)"

      - uses: actions/cache@v3
        name: Setup pnpm cache
        with:
          path: ${{ steps.pnpm-cache.outputs.pnpm_cache_dir }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

此文件其实是一个工作流，我们将代码提交到远程 `main` 分支时，会自动执行代码的拉取，并安装 node 和 pnpm，然后安装需要的依赖，最后自动进行构建。工作流还对 pnpm 安装的依赖包进行了缓存，不用每次都重新依赖能够缓存，得益于 [action-step](https://github.com/pnpm/action-setup)。

新增完部署文件我们就可以推到远程仓库啦

```bash
git push -u origin main
```

GitHub 仓库收到推送后会去自动构建我们的项目，在分支那可以看到多了一个 `gh-pages` 的分支。

此时我们需要配置一下，待配置完后，我们就可以，通过 [xxx.github.io](http://xxx.github.io) 来访问我们自己的博客了。

![](../../public/imgs/2022/09/19/20220919180014.png)

至此，我们的部署已完成，后续配置那些就看文档吧，或者等我哪天有空再写。

### 自定义域名

需要在 `docs/public` 目录下新增 `CNAME` 文件，并填入你的域名，如：
```txt
blog.teemwu.com
```
然后需要到域名服务商那添加 DNS 解析。本人用的是 cloudflare ，添加如下：

![](../../public/imgs/2022/12/05/20221205113425.png)

注意：如果 `CNAME` 文件没有放到网站读取目录，则每次发布都需要到 github 手动设置自定义域名。

## 使用 Tailwindcss

```bash
pnpm i tailwindcss postcss autoprefixer -D
```

```bash
npx tailwindcss init -p
```

执行完上面两个命令后，项目根目录会生成 `tailwind.config.js` 和 `postcss.config.js` 两个文件，此时需要修改一下 `tailwindcss.congif.js` 文件

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./docs/**/*.{html,js,vue,ts,md}', './docs/.vitepress/**/*.{html,js,vue,ts,md}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

修改 `postcss.config.js`

```jsx
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      autoprefixer: { flexbox: 'no-2009' },
      features: { 'custom-properties': false },
      stage: 3
    }
  }
}
```

然后 `docs/.vitepress/theme/custom.css` 改成如下即可

```jsx
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
	/* --vp-c-brand: #2f39fc;
	--vp-c-brand-dark: #2f39fc; */
}
.image-src{
	border-radius: 50%;
}
```

记得新增 `docs/.vitepress/theme/index.ts` 文件

```tsx
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

可以在 `.md` 中测试

```markdown
# 关于我

<div class=" text-red-500 flex ">About Me</div>
```

## 参考
- [Vite 官方文档](https://github.com/vitejs/vite/tree/main/docs/.vitepress/theme/styles) - 参考样式编写
- [Windicss 官方文档](https://github.com/windicss/docs/tree/main/.vitepress/config) - 配置目录结构参考
- [查尔斯的知识库](https://github.com/Charles7c/charles7c.github.io) - 通过此博客知道部分自定义参考地址
- [pnpm install doesn't refresh lock file](https://github.com/pnpm/pnpm/issues/2807#issuecomment-682471525) - 解决发布时包异常
- [Shields IO](https://shields.io/) - 为 `README` 增加标签图标
