import { useScriptTag } from '@vueuse/core'

export function useGoogleAnaly() {
	useScriptTag('https://www.googletagmanager.com/gtag/js?id=G-9YNB4KC0CW', () => {
		// @ts-ignore
		window.dataLayer = window.dataLayer || []
		// @ts-ignore
		function gtag() { dataLayer.push(arguments) }
		// @ts-ignore
		gtag('js', new Date())
		// @ts-ignore
		gtag('config', 'G-9YNB4KC0CW')
	}, { async: true })
}