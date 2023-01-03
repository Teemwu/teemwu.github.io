<template>
	<div class="w-11/12 max-w-3xl mx-auto my-6">
		<a-timeline mode="left"
					labelPosition="relative">
			<template v-for="item in _archives"
					  :key="item[0]">
				<a-timeline-item :label="`${item[0]} 年 - ${item[1].length}篇`">
					<a-collapse :bordered="false"
								destroy-on-hide
								class="-mt-2.5">
						<template v-for="itm in item[1]"
								  :key="itm[0]">
							<a-collapse-item :header="`${itm[0]} 月`"
											 :show-expand-icon="false">
								<postList :modelValue="itm[1]" />
							</a-collapse-item>
						</template>
					</a-collapse>
				</a-timeline-item>
			</template>
		</a-timeline>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import dayjs from 'dayjs'
import { ArchiveList } from '../../models'

const { theme } = useData()
const { posts } = theme.value
const archives = ref<ArchiveList[]>()
const archivesObj: Record<number, any> = {}

posts.forEach(p => {
	if (!p.date) return

	const date = dayjs(p.date)
	const year = date.format('YYYY')
	const month = date.format('MM')

	if (archivesObj[year]) {
		if (archivesObj[year].months[month]) {
			archivesObj[year].months[month].push(p)
		} else {
			archivesObj[year].months[month] = [p]
		}
	} else {
		archivesObj[year] = { months: {} }
		archivesObj[year].months[month] = [p]
	}
})

const _archives = Object.entries(archivesObj)
_archives.map(i => {
	i[1] = Object.entries(i[1].months).sort((a: any, b: any) => (b[0] - a[0]))
	return i
})

archives.value = _archives.sort((a: any, b: any) => (b[0] - a[0]))

</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
	:deep(.arco-timeline-item-vertical-left.arco-timeline-item-label-relative) {
		margin-left: 0;
	}

	:deep(.arco-timeline-item-vertical-left.arco-timeline-item-label-relative > .arco-timeline-item-label) {
		transform: translateX(22px);
	}

	:deep(.arco-collapse) {
		margin-top: 20px;
	}

	:deep(.arco-collapse-item-header-left) {
		padding-left: 0;
	}

	:deep(.arco-collapse-item-content) {
		padding-left: 13px;
	}
}
</style>