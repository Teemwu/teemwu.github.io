<template>
	<Layout>
		<template #doc-after>
			<Comment v-if="!hideCommentRef" />
		</template>
	</Layout>
</template>

<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import Comment from './components/comment.vue'
import { useGiscus } from './hooks/useGiscus'
import { useGoogleAnaly } from './hooks/useGooogleAnaly'

useGoogleAnaly()

const { Layout } = DefaultTheme
const { hideCommentRef } = useGiscus()
</script>