
import store from 'store2'

export const getCurrentTheme = () => store.get('vitepress-theme-appearance') === 'light' ? 'light' : 'dark'
export const sendMessage = message => {
	const iframe = document.querySelector('iframe.giscus-frame') as any
	if (!iframe) return
	iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app')
}
export const setCommentTheme = () => sendMessage({ setConfig: { theme: getCurrentTheme() } })
export const observerThemeChange = () => {
	const observer = new MutationObserver(mutations => mutations.forEach(setCommentTheme))
	observer.observe(document.getElementsByTagName('html')[0], { attributes: true, attributeFilter: ['class'] })
}