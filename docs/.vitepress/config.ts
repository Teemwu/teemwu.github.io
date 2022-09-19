import { defineConfig } from 'vitepress'
import { themeConfig } from './config/theme'
import { constants } from './config/constants'
import { head } from './config/head'
import { vite } from './config/vite'
import { markdown } from './config/markdown'

export default defineConfig({
	...constants,
	themeConfig,
	markdown,
	head,
	vite
})
