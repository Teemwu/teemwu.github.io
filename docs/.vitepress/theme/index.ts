import DefaultTheme from 'vitepress/theme'
import './styles/index.scss'
import Layout from './Layout.vue'
import { useGoogleAnalytics } from './hooks/useGooogleAnalytics'
import { useMediumZoom } from './hooks/useMediumZoom'

export default {
	...DefaultTheme,
	Layout,
	setup() {
		useMediumZoom()
	},
	enhanceApp() {
		useGoogleAnalytics()
	}
}