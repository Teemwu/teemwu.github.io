import { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
	['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }],
	['meta', { name: 'google-site-verification', content: '1oNfPpyo07YiTV--BGQt9O8H9IRH7RUYN5oauOwzU6o' }],
	['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-9YNB4KC0CW' }],
	['script', {}, `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-9YNB4KC0CW');`]
]