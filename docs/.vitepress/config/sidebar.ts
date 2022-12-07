import { sync } from 'fast-glob'
import { DefaultTheme } from 'vitepress/theme'
import matter from 'gray-matter'
import { countWord } from '../theme/utils'
import { outputFileSync } from 'fs-extra'

const files = sync(['docs/**/*.md', '!docs/.vitepress', '!docs/public'], { objectMode: true })
const sidebar: DefaultTheme.Sidebar = {}

if (files && files.length) {
	files.reverse().forEach(({ name, path }) => {
		const { data, content } = matter(matter.read(path))
		const { isPublished, title, wordCount } = data
		const _wordCount = countWord(content)

		if (title && wordCount !== _wordCount) {
			const _content = matter.stringify(content, Object.assign({}, data, { wordCount: _wordCount }))
			outputFileSync(path, _content, { encoding: 'utf-8' })
		}

		if (!isPublished) return

		name = name.replace('.md', '')
		path = path.replace('.md', '').replace('docs/', '')

		const names = path.split('/')
		const removeIndex = (str) => str.replace(/^[0-9]+[\.|\-|_]/, '')

		if (names.length > 1) {
			if (!names[2] && names[1].indexOf('index') !== -1 && names[names.length - 1].indexOf('.md') === -1) return
			const key = `/${names[0]}/`
			const link = `/${encodeURI(path)}`
			// const link = `/${path}`
			const text = removeIndex(title || names[1])
			const name1 = removeIndex(names[2] ? names[1] : names[0])

			const _item = {
				text: name1,
				collapsed: true,
				collapsible: true,
				items: [{ text, link }]
			}

			if (sidebar[key]) {
				const _key = name1
				const index = sidebar[key].findIndex(i => i.text === _key)
				if (index === -1) {
					sidebar[key].push(_item)
				} else {
					const _it = sidebar[key][index]
					sidebar[key][index].text = _it.text
					sidebar[key][index].items.push({ text, link })
				}
			} else {
				sidebar[key] = [_item]
			}
		}
	})
}

// console.dir(sidebar, { depth: null })

export { sidebar }