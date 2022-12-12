<template>
	<a-breadcrumb v-if="!modelValue.hideArticleMeta"
				  separator="">
		<a-tooltip content="作者"
				   position="bottom"
				   mini>
			<a-link href="/about">
				<a-breadcrumb-item>
					<icon-user />
					{{ modelValue.author }}
				</a-breadcrumb-item>
			</a-link>
		</a-tooltip>
		<a-tooltip content="发布时间"
				   position="bottom"
				   mini>
			<a-breadcrumb-item>
				<icon-calendar />
				{{ dayjs(modelValue.date).format('YYYY-MM-DD') }}
			</a-breadcrumb-item>
		</a-tooltip>
		<a-breadcrumb-item>
			<icon-font type="icon-countdown"
					   size="smaller" />
			{{ Math.round(modelValue.wordCount / 400) || 1 }}min
		</a-breadcrumb-item>
		<a-breadcrumb-item>
		</a-breadcrumb-item>
	</a-breadcrumb>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { Icon } from '@arco-design/web-vue'

defineProps<{ modelValue: any }>()

const IconFont = Icon.addFromIconFontCn({ src: '//at.alicdn.com/t/c/font_3814940_1gstz06kjmy.js' })

</script>

<style lang="scss" scoped>

</style>