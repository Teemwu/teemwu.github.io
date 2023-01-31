import { DefaultTheme } from 'vitepress/theme'

export const nav: DefaultTheme.Config['nav'] = [
	{ text: '随笔', link: '/' },
	{ text: '分类', link: 'categories', activeMatch: 'categories' },
	{ text: '标签', link: 'tags', activeMatch: 'tags' },
	{ text: '归档', link: 'archives', activeMatch: 'archives' }
]