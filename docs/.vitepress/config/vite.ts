import { UserConfig } from 'vitepress'

export const vite: UserConfig['vite'] = {
	server: {
		open: true,
		// hmr: {
		// 	protocol: 'ws'
		// }
	}
}