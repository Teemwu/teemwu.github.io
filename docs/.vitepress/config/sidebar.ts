import path from 'path'
import fg from 'fast-glob'
import { DefaultTheme } from 'vitepress/theme'

const docsPath = path.resolve(process.cwd(), 'docs')
const resolve = (dir: string) => path.resolve(docsPath, dir)

const files = fg.sync([resolve('**/*.md'), resolve('.vitepress')])

const sidebar: DefaultTheme.Sidebar = {}

if (files && files.length) {
	files.sort().forEach(file => {
		const removeRoot = (str: string) => str.replace(docsPath + '/', '')
		const removeIndex = (str: string) => str.replace(/^\d{1,}\./, '')
		const removeMdExt = (str: string) => str.replace('.md', '')
		file = removeRoot(file)
		const names = file.split('/').map(removeMdExt)
		if (names.length > 1) {
			if (!names[2] && names[1].indexOf('index') !== -1 && names[names.length - 1].indexOf('.md') === -1) return
			const key = `/${names[0]}/`
			const link = `/${file}`
			const text = removeIndex(names[2] || names[1])
			const name1 = removeIndex(names[2] ? names[1] : names[0])

			const _item = {
				text: name1,
				collapsed: false,
				collapsible: true,
				items: [{ text, link }]
			}
			_item.text = _item.text + `[${_item.items.length}]`
			if (sidebar[key]) {
				const _key = name1
				const index = sidebar[key].findIndex(i => i.text === _key)
				if (index === -1) {
					sidebar[key].push(_item)
				} else {
					const _it = sidebar[key][index]
					sidebar[key][index].text = _it.text + `(${_it.items.length})篇`
					sidebar[key][index].items.push({ text, link })
				}
			} else {
				sidebar[key] = [_item]
			}
		}
	})
}

console.dir(sidebar, { depth: null })

export { sidebar }