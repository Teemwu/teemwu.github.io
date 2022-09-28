import DefaultTheme from 'vitepress/theme'
import './styles/index.scss'
import Layout from './Layout.vue'

export default {
	...DefaultTheme,
	Layout,
	enhanceApp() { }
}