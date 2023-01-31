import DefaultTheme from 'vitepress/theme'
import './styles/index.scss'
import Layout from './Layout.vue'
import { useGoogleAnalytics } from './hooks/useGooogleAnalytics'
import { useMediumZoom } from './hooks/useMediumZoom'
import { useArcoDesign } from './hooks/useAcroDesign'
import { onMounted } from 'vue'
import Home from './components/home.vue'
import PostList from './components/postList.vue'
import Tags from './components/tags.vue'
import Archives from './components/archives.vue'
import Categories from './components/categories.vue'
import ArticleMeta from './components/articleMeta.vue'

export default {
	...DefaultTheme,
	Layout,
	setup() {
		useArcoDesign()
		useMediumZoom()

		onMounted(() => {
			useGoogleAnalytics()
		})
	},
	enhanceApp({ app }) {
		app.component('Home', Home)
		app.component('PostList', PostList)
		app.component('Tags', Tags)
		app.component('Archives', Archives)
		app.component('Categories', Categories)
		app.component('ArticleMeta', ArticleMeta)
	}
}