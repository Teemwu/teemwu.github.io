import DefaultTheme from 'vitepress/theme'
import './styles/index.scss'
import Layout from './Layout.vue'
import { useGoogleAnalytics } from './hooks/useGooogleAnalytics'
import { useMediumZoom } from './hooks/useMediumZoom'
import { useArcoDesign } from './hooks/useAcroDesign'
import { onMounted } from 'vue'

export default {
	...DefaultTheme,
	Layout,
	setup() {
		useArcoDesign()
		useMediumZoom()

		onMounted(() =>{
			useGoogleAnalytics()
		})
	},
	enhanceApp() { }
}