<template>
	<Layout>
		<template #doc-after>
			<Comment />
		</template>
	</Layout>
</template>

<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue';
import Comment from './components/comment.vue'
import { observerThemeChange } from './utils'

const { Layout } = DefaultTheme
onMounted(() => observerThemeChange())
</script>