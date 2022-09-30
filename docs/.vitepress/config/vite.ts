import { UserConfig } from 'vitepress'

export const vite: UserConfig['vite'] = {
	server: {
		open: true,
		host: '0.0.0.0',
		hmr: {
			protocol: 'https'
		}
	}
}