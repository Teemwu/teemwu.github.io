import { UserConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

require('dotenv-flow').config()

const { PROTOCOL } = process.env

export const vite: UserConfig['vite'] = {
	server: {
		// open: true,
		host: '0.0.0.0',
		hmr: {
			protocol: PROTOCOL
		}
	},
	plugins: [
		AutoImport({
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
			resolvers: [ArcoResolver()]
		}),
		Components({
			dirs: ['.vitepress/theme/components'],
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
			resolvers: [ArcoResolver({ resolveIcons: true })]
		})
	],
	ssr: { noExternal: ['@arco-design/web-vue'] }
}