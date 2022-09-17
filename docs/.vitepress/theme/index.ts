import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Layout from './Layout.vue'
import { onBeforeMount, watch } from 'vue'
import { useScriptTag } from '@vueuse/core'

const getCurrentTheme = () => window.localStorage.getItem('vitepress-theme-appearance') === 'light' ? 'light' : 'dark'
const { load, unload } = useScriptTag('https://giscus.app/client.js', undefined, {
	manual: true,
	attrs: {
		'data-repo': 'Teemwu/teemwu.github.io',
		'data-repo-id': 'R_kgDOH_qrDg',
		'data-category': 'Comments',
		'data-category-id': 'DIC_kwDOH_qrDs4CRdju',
		'data-mapping': 'title',
		'data-strict': '1',
		'data-reactions-enabled': '1',
		'data-emit-metadata': '0',
		'data-input-position': 'top',
		'data-theme': getCurrentTheme(),
		'data-lang': 'zh-CN',
		'crossorigin': 'anonymous',
		'async': 'true'
	}
})

const sendMessage = message => {
	const iframe = document.querySelector('iframe.giscus-frame') as any
	if (!iframe) return
	iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app')
}
const setCommentTheme = () => sendMessage({ setConfig: { theme: getCurrentTheme() } })
const observerThemeChange = () => {
	const observer = new MutationObserver(mutations => mutations.forEach(setCommentTheme))
	observer.observe(document.getElementsByTagName('html')[0], { attributes: true, attributeFilter: ['class'] })
}

export default {
	...DefaultTheme,
	Layout,
	enhanceApp(e) {
		watch(
			() => e.router.route.path,
			() => {
				unload()
				load().then(() => observerThemeChange())
			}
		)
	}
}