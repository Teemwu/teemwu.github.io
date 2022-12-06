<template>
	<Layout>
		<template #doc-after>
			<Comment  />
		</template>
	</Layout>
</template>

<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import Comment from './components/comment.vue'
import { useGoogleAnalytics } from './hooks/useGooogleAnalytics'

useGoogleAnalytics()

const { Layout } = DefaultTheme

</script>