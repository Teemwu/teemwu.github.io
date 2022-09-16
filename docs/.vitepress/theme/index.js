// import DefaultTheme from 'vitepress/theme'
// import './custom.css'

// export default DefaultTheme

import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Layout from './Layout.vue'
import { watch } from 'vue'

export default {
	...DefaultTheme,
	Layout,
	enhanceApp({ router }) {
		watch(
			() => router.route.path,
			(path) => {
				console.log('ggggg');
				try {
					const _path = localStorage.getItem('pathname')
					if (_path !== router.route.path) {
						localStorage.setItem('pathname', router.route.path)
						location.reload()
					}
					const username = path?.split('/')?.[1]
					const userRoot = `${username}-app`
					if (document) {
						const rootEl = document?.querySelector('#app')
						if (rootEl) rootEl.className = userRoot
					}
				} catch (e) { }
			}
		)
	}
}