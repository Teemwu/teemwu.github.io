import { sync } from 'fast-glob'
import { DefaultTheme } from 'vitepress/theme'
import matter from 'gray-matter'
import { countWord } from '../theme/utils'
import { outputFileSync } from 'fs-extra'
import dayjs from 'dayjs'

const files = sync(['posts/**/*.md'], { objectMode: true })
const _sidebar: any = {}
const _posts = []
const tagsObj: Record<string, number> = {}
const categoriesObj: Record<string, number> = {}

if (files && files.length) {
  files.reverse().forEach(({ name, path }) => {
    const { data, content } = matter(matter.read(path))
    const { isPublished, title, wordCount, tags, categories } = data

    // 过滤掉不发布文章
    if (!isPublished) return

    // 标签统计
    if (tags && tags.length) {
      tags.forEach(t => {
        if (tagsObj[t]) {
          tagsObj[t]++
        } else {
          tagsObj[t] = 1
        }
      })
    }

    // 分类统计
    if (categories && categories.length) {
      categories.forEach(c => {
        if (categoriesObj[c]) {
          categoriesObj[c]++
        } else {
          categoriesObj[c] = 1
        }
      })
    }

    /**
     * 字数统计
     */
    const _wordCount = countWord(content)
    if (title && wordCount !== _wordCount) {
      const _content = matter.stringify(content, Object.assign({}, data, { wordCount: _wordCount }))
      outputFileSync(path, _content, { encoding: 'utf-8' })
    }

    name = name.replace('.md', '')
    path = path.replace('.md', '').replace('docs/', '')

    // 新增文章
    _posts.push({
      name,
      path,
      ...data
    })

    const names = path.split('/')
    const removeIndex = str => str.replace(/^[0-9]+[\.|\-|_]/, '')

    if (names.length > 1) {
      if (!names[2] && names[1].indexOf('index') !== -1 && names[names.length - 1].indexOf('.md') === -1) return
      const key = `/${names[0]}/`
      const link = `/${encodeURI(path)}`
      // const link = `/${path}`
      const text = removeIndex(title || names[1])
      const name1 = removeIndex(names[2] ? names[1] : names[0])
      const date = data.date

      const _item = {
        text: name1,
        collapsed: true,
        items: [{ text, link, date }]
      }

      if (_sidebar[key]) {
        const _key = name1
        const index = _sidebar[key].findIndex(i => i.text === _key)
        if (index === -1) {
          _sidebar[key].push(_item)
        } else {
          const _it = _sidebar[key][index]
          _sidebar[key][index].text = _it.text
          _sidebar[key][index].items.push({ text, link, date })
        }
      } else {
        _sidebar[key] = [_item]
      }
    }
  })
}

const descTime = (arr: any, key: string) => arr.sort((a, b) => dayjs(b[key]).unix() - dayjs(a[key]).unix())

// 文章按日期进行排序
const posts = descTime(_posts, 'date')
const tags = Object.entries(tagsObj)
const categories = Object.entries(categoriesObj)
const sidebar: DefaultTheme.Sidebar = {}

for (const key in _sidebar) {
  if (Object.prototype.hasOwnProperty.call(_sidebar, key)) {
    const item = _sidebar[key]
    sidebar[key] = descTime(item, 'text').map(i => {
      i.items = descTime(i.items, 'date')
      return i
    })
  }
}

// console.dir(sidebar, { depth: null })
export { sidebar, posts, tags, categories }
