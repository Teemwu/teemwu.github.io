import { MyConfig } from '../models'
import { nav } from './nav'
import { sidebar, posts, tags, categories } from './init'

const myConfig: MyConfig = {
	posts,
	tags,
	categories
}

export const themeConfig: MyConfig = {
	logo: '/logo.jpg',
	outlineTitle: '目录',
	outline: 'deep',
	docFooter: {
		prev: '上一篇',
		next: '下一篇'
	},
	lastUpdatedText: '上次更新时间',
	nav,
	socialLinks: [
		{
			icon: 'github',
			link: 'https://github.com/Teemwu'
		}
	],
	sidebar,
	footer: {
		message: 'Released under the MIT License.',
		copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2023033148号-1</a> Copyright © 2022-present Teemwu'
	},
	// algolia: {
	// 	appId: 'DSW8O07XW5',
	// 	apiKey: 'a2f6b81f63d5da048c4124158af8ebc1',
	// 	indexName: 'dev_teemwu'
	// },
	editLink: {
		pattern: 'https://github.com/Teemwu/teemwu.github.io/edit/main/docs/:path',
		text: '编辑'
	},
	...myConfig
}
