<template>
	<div class="w-11/12 max-w-3xl mx-auto my-6">
		<h1 class="text-center">Hi, I'm Teemwu</h1>
		<postList v-model="posts"
				  :page-size="8" />
	</div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import postList from './postList.vue'

const { theme } = useData()
const { posts } = theme.value
</script>