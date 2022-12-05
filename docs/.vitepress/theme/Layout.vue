<template>
	<Layout>
		<!-- <template #doc-after>
			<Comment v-if="!hideCommentRef" />
		</template> -->
	</Layout>
</template>

<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
// import Comment from './components/comment.vue'
// import { useGiscus } from './hooks/useGiscus'
import { useGoogleAnalytics } from './hooks/useGooogleAnalytics'

useGoogleAnalytics()

const { Layout } = DefaultTheme
// const { hideCommentRef } = useGiscus()
</script>