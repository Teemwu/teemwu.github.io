import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'Teemwu\'s blog',
	description: 'Teemwu\'s blog',
	themeConfig: {
		nav: [
			{ text: '学习', link: '/guide' },
			{ text: '娱乐', link: '/' },
			{
				text: '百宝箱',
				items: [
					{
						// You may also omit the title.
						items: [
							{ text: 'Section A Item A', link: '...' },
							{ text: 'Section B Item B', link: '...' }
						]
					}
				]
			}
		],
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2019-present Evan You'
		}
	}
})
