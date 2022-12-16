<template>
	<div class="w-11/12 max-w-3xl mx-auto my-6">
		<h1 class="text-center">标签</h1>
		<a-radio-group v-model="current"
					   default-value="all"
					   class="text-center"
					   @change="t => params.tag = t">
			<a-radio value="all"
					 class="mb-2"
					 style="margin-right: 6px;">
				<template #radio="{ checked }">
					<a-tag :checked="checked"
						   checkable
						   bordered>全部 {{ _posts.length }}</a-tag>
				</template>
			</a-radio>
			<template v-for="item in tags"
					  :key="item[0]">
				<a-radio :value="item[0]"
						 class="mb-2"
						 style="margin-right: 6px;">
					<template #radio="{ checked }">
						<a-tag :checked="checked"
							   checkable
							   bordered>{{ item[0] }} {{ item[1] }}</a-tag>
					</template>
				</a-radio>
			</template>
		</a-radio-group>
		<postList v-model="list" />
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import postList from './postList.vue'
import { useUtils } from '../hooks/useUtils'

const { params } = useUtils()
const { theme } = useData()
const { posts, tags } = theme.value
const current = ref(tags.findIndex(c => c[0] === params.tag) !== -1 ? params.tag : 'all')
const _posts = posts.filter(p => p.tags && p.tags.length)

const list = computed(() => {
	const _current = current.value

	if (!_posts.length) return []

	if (_current === 'all') return _posts

	return _posts.filter(p => {
		if (!p.tags) return false
		return p.tags.indexOf(_current) !== -1
	})
})

</script>