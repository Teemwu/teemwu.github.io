<template>
	<a-breadcrumb v-if="!modelValue.hideArticleMeta"
				  separator=""
				  class="flex-wrap">
		<!-- <a-tooltip content="作者"
				   position="bottom"
				   mini>
			<a-link href="/about">
				<a-breadcrumb-item class="whitespace-nowrap">
					<icon-user />
					{{ modelValue.author }}
				</a-breadcrumb-item>
			</a-link>
		</a-tooltip> -->
		<a-tooltip content="发布时间"
				   position="bottom"
				   mini>
			<a-breadcrumb-item class="whitespace-nowrap">
				<icon-calendar />
				{{ dayjs(modelValue.date).format('YYYY-MM-DD') }}
			</a-breadcrumb-item>
		</a-tooltip>
		<a-tooltip v-if="modelValue.categories && modelValue.categories.length"
				   content="分类"
				   position="bottom"
				   min>
			<a-breadcrumb-item class="whitespace-nowrap">
				<icon-folder />
				<template v-for="(item, index) in modelValue.categories"
						  :key="item">
					<a-link :href="`/categories?category=${item}`"
							class="tag-link">{{ item }}</a-link>
					{{ index !== modelValue.categories.length - 1 ? ',' : '' }}
				</template>
			</a-breadcrumb-item>
		</a-tooltip>
		<a-tooltip v-if="modelValue.tags && modelValue.tags.length"
				   content="标签"
				   position="bottom"
				   min>
			<a-breadcrumb-item class="whitespace-nowrap">
				<icon-tags />
				<template v-for="(item, index) in modelValue.tags"
						  :key="item">
					<a-link :href="`/tags?tag=${item}`"
							class="tag-link">{{ item }}</a-link>
					{{ index !== modelValue.tags.length - 1 ? ',' : '' }}
				</template>
			</a-breadcrumb-item>
		</a-tooltip>
		<a-tooltip content="预计阅读"
				   position="bottom"
				   mini>
			<a-breadcrumb-item class="whitespace-nowrap">
				<icon-font type="icon-countdown"
						   size="smaller" />
				{{ Math.round(modelValue.wordCount / 400) || 1 }}min
			</a-breadcrumb-item>
		</a-tooltip>
		<a-breadcrumb-item>
		</a-breadcrumb-item>
	</a-breadcrumb>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { Icon } from '@arco-design/web-vue'
import { FrontMatter } from '../../models'

defineProps<{ modelValue: FrontMatter }>()

const IconFont = Icon.addFromIconFontCn({ src: '//at.alicdn.com/t/c/font_3814940_1gstz06kjmy.js' })

</script>

<style lang="scss" scoped>
:deep(.arco-breadcrumb-item, .arco-link) {
	margin-left: -4px;
}

.tag-link {
	font-size: unset;
	margin-left: 2px !important;
	color: unset !important;
}
</style>