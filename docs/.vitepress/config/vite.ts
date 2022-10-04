import { UserConfig } from 'vitepress'

require('dotenv-flow').config()

const { PROTOCOL } = process.env

export const vite: UserConfig['vite'] = {
	server: {
		open: true,
		host: '0.0.0.0',
		hmr: {
			protocol: PROTOCOL
		}
	}
}