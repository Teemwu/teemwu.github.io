import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Layout from './Layout.vue'
import { watch } from 'vue'
import { useScriptTag } from '@vueuse/core'
import { getCurrentTheme } from './utils'

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

export default {
	...DefaultTheme,
	Layout,
	enhanceApp({ router }) {
		watch(
			() => router.route.path,
			() => {
				unload()
				load()
			}
		)
	}
}