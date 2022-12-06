import { onMounted, watch, nextTick } from 'vue'
import MediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress'

export function useMediumZoom() {
	const route = useRoute()
	const init = () => MediumZoom('.main img', { background: 'var(--vp-c-bg)' })
	watch(() => route.path, () => nextTick(() => init()))
	onMounted(() => init())
}