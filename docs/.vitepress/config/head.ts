import { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
	['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }],
	['meta', { name: 'google-site-verification', content: 'e1r7hIR-AbjI6mW11GD1nX9ilw2aAmPGbiXS7MZj3hU' }],
	['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-9YNB4KC0CW' }],
	['script', {}, `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-9YNB4KC0CW');`]
]