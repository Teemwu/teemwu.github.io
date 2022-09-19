import { DefaultTheme } from 'vitepress/theme'

export const nav: DefaultTheme.Config['nav'] = [
	{ text: '随笔', link: '/随笔/' },
	{ text: '基础知识', link: '/基础知识/' },
	{ text: '工程化', link: '/前端工程化/' },
	{ text: '面试题集', link: '/面试题集/' },
	{
		text: '百宝箱',
		items: [
			{
				text: '工具',
				items: [
					{ text: 'Section A Item A', link: '...' },
					{ text: 'Section B Item B', link: '...' }
				]
			}
		]
	}
]