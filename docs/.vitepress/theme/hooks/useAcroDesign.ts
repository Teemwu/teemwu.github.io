import { watch } from 'vue'
import { useData } from 'vitepress'

export function useArcoDesign() {
	const { isDark } = useData()

	watch(isDark, (newVal) => {
		if (newVal) {
			document.body.setAttribute('arco-theme', 'dark')
		} else {
			document.body.removeAttribute('arco-theme')
		}
	})
}