<template>
	<Layout>
		<template #doc-after>
			<Comment v-if="!hideCommentRef" />
		</template>
	</Layout>
</template>

<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import { computed, onMounted, watch } from 'vue';
import Comment from './components/comment.vue'
import { observerThemeChange } from './utils'
import { useData, useRouter } from 'vitepress'
import { useScriptTag } from '@vueuse/core'
import { getCurrentTheme } from './utils'

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
		'data-theme': getCurrentTheme(),
		'data-lang': 'zh-CN',
		'crossorigin': 'anonymous',
		'async': 'true'
	}
})

const router = useRouter()
const data = useData()
const hideCommentRef = computed(() => data.page.value.frontmatter.hideComment)
const { Layout } = DefaultTheme

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

onMounted(() => observerThemeChange())
</script>