import path from 'path'
import fg from 'fast-glob'

const docsPath = path.resolve(process.cwd(), 'docs')
const resolve = (dir: string) => path.resolve(docsPath, dir)

const files = fg.sync([resolve('**/*.md'), resolve('.vitepress')])

const sidebar = {}

if (files && files.length) {
	files.sort().forEach(file => {
		const removeRoot = (str: string) => str.replace(docsPath + '/', '')
		const removeIndex = (str: string) => str.replace(/^\d{1,}./, '')
		const removeMd = (str: string) => str.replace('.md', '')
		file = removeRoot(file)
		const names = file.split('/').map(removeMd)
		if (names.length > 1) {
			if (!names[2] && names[1].indexOf('index') !== -1) return
			const key = `/${names[0]}/`
			const link = `/${file}`
			const text = removeIndex(names[2] || names[1])
			const name1 = removeIndex(names[2] ? names[1] : '')
			const _item = {
				text: name1,
				collapsed: false,
				collapsible: true,
				items: [{ text, link }]
			}
			if (sidebar[key]) {
				const _key = name1
				const index = sidebar[key].findIndex(i => i.text === _key)
				if (index === -1) {
					sidebar[key].push(_item)
				} else {
					sidebar[key][index].items.push({ text, link })
				}
			} else {
				sidebar[key] = [_item]
			}
		}
	})
}

console.log('sidebar:', sidebar)

export default sidebar