import { defineConfig, DefaultTheme } from 'vitepress'
import sidebar from './sidebar'

const themeConfig: DefaultTheme.Config = {
	nav: [
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
	],
	socialLinks: [
		{
			icon: 'github',
			link: 'https://github.com/Teemwu'
		}
	],
	sidebar,
	footer: {
		message: 'Released under the MIT License.',
		copyright: 'Copyright © 2022-present Teemwu'
	},
	algolia: {
		appId: 'DSW8O07XW5',
		apiKey: 'a2f6b81f63d5da048c4124158af8ebc1',
		indexName: 'dev_teemwu'
	},
	lastUpdatedText: '最后更新时间',
	editLink: {
		pattern: 'https://github.com/Teemwu/teemwu.github.io/edit/main/docs/:path',
		text: 'Edit this page on GitHub'
	}
}

export default defineConfig({
	title: 'Teemwu\'s blog',
	description: 'Teemwu\'s blog',
	themeConfig,
	lastUpdated: true,
	cleanUrls: 'with-subfolders',
	markdown: {
		headers: {
			level: [0, 0]
		}
	},
	vite: {
		server: {
			open: true,
			hmr: {
				protocol: 'wss'
			}
		}
	}
})
