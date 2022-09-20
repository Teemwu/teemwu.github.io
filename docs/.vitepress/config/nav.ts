import { DefaultTheme } from 'vitepress/theme'

export const nav: DefaultTheme.Config['nav'] = [
	{ text: '随笔', link: '/随笔/index.md', activeMatch: '/随笔/' },
	{ text: '基础知识', link: '/基础知识/index.md', activeMatch: '/基础知识/' },
	{ text: '工程化', link: '/前端工程化/index.md', activeMatch: '/前端工程化/' },
	{ text: '面试题集', link: '/面试题集/index.md', activeMatch: '/面试题集/' },
	{
		text: '百宝箱',
		activeMatch: '/百宝箱/',
		items: [
			{
				text: '工具集',
				link: '/百宝箱/工具集'
			},
			{
				text: '网站集',
				link: '/百宝箱/网站集'
			}
		]
	}
]