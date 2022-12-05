import { DefaultTheme } from 'vitepress/theme'

export const nav: DefaultTheme.Config['nav'] = [
	{ text: '随笔', link: '/随笔/2022/Vitepress 和 Github Pages 搭建个人博客', activeMatch: '/随笔/' },
	{ text: '基础知识', link: '/基础知识/03.Javascript/DOM', activeMatch: '/基础知识/' },
	{ text: '工程化', link: '/前端工程化/index', activeMatch: '/前端工程化/' },
	{ text: '面试题集', link: '/面试题集/未分类/杂七杂八', activeMatch: '/面试题集/' },
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