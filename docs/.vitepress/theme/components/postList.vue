<template>
	<a-list :bordered="false"
			:data="modelValue"
			:pagination-props="modelValue.length > 6 ? { defaultPageSize: 6, total: modelValue.length } : null">
		<template #item="{ item }">
			<a-list-item v-if="item.isPublished && item.title">
				<a-list-item-meta>
					<template #title>
						<a-link :href="item.path">{{ item.title }}</a-link>
					</template>
					<template #description>
						<articleMeta :model-value="item" />
					</template>
				</a-list-item-meta>
			</a-list-item>
		</template>
	</a-list>
</template>

<script setup lang="ts">
import articleMeta from './articleMeta.vue'
import { Post } from '../../models'

defineProps<{ modelValue: Post[] }>()
</script>

<style lang="scss" scoped>
:deep(.arco-list-medium .arco-list-content-wrapper .arco-list-content > .arco-list-item) {
	padding-left: 0;
	padding-right: 0;
}

:deep(.arco-link) {
	margin-left: -4px;
}

:deep(.arco-breadcrumb){
	margin: 0;
}
</style>