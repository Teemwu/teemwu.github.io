
import { computed, watch } from 'vue'
import { useData, useRouter } from 'vitepress'
import { useScriptTag } from '@vueuse/core'
import { setCommentTheme, getCommentTheme } from '../utils/index'

export function useGiscus() {
	const router = useRouter()
	const { isDark, page } = useData()
	const hideCommentRef = computed(() => page.value.frontmatter.hideComment)
	const { load, unload } = useScriptTag('https://giscus.app/client.js', undefined, {
		manual: true,
		attrs: {
			'data-repo': 'Teemwu/teemwu.github.io',
			'data-repo-id': 'R_kgDOH_qrDg',
			'data-category': 'Announcements',
			'data-category-id': 'DIC_kwDOH_qrDs4CRdju',
			'data-mapping': 'title',
			'data-strict': '1',
			'data-reactions-enabled': '1',
			'data-emit-metadata': '0',
			'data-input-position': 'top',
			'data-theme': getCommentTheme(isDark.value),
			'data-lang': 'zh-CN',
			'crossorigin': 'anonymous',
			'async': 'true'
		}
	})

	watch(isDark, (newIsDark) => {
		setCommentTheme(newIsDark)
	}, { immediate: true })

	watch(
		() => router.route.path,
		() => {
			if (!hideCommentRef.value) {
				unload()
				load()
			}
		},
		{ immediate: true }
	)

	return { hideCommentRef }
}
