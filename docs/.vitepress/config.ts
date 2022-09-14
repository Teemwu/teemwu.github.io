import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'Teemwu\'s blog',
	description: 'Teemwu\'s blog',
	themeConfig: {
		nav: [
			{ text: 'Guide', link: '/guide' },
			{
				text: 'Dropdown Menu',
				items: [
					{
						// Title for the section.
						text: 'Section A Title',
						items: [
							{ text: 'Section A Item A', link: '...' },
							{ text: 'Section B Item B', link: '...' }
						]
					}
				]
			},
			{
				text: 'Dropdown Menu',
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
