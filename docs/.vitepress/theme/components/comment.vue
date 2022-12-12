<template>
  <div class="comments-container"
       v-if="loaded && !page.frontmatter.hideComment">
    <Giscus id="comments"
            repo="Teemwu/teemwu.github.io"
            repoId="R_kgDOH_qrDg"
            category="Announcements"
            categoryId="DIC_kwDOH_qrDs4CRdju"
            mapping="title"
            strict="1"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            lang="zh-CN"
            crossorigin="anonymous"
            :theme="isDark ? 'transparent_dark' : 'light'"
            :term="page.title"
            async="true" />
  </div>
</template>

<script setup lang="ts">
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'
import { ref, onMounted, nextTick } from 'vue'

const loaded = ref(false)
const { isDark, page } = useData()

onMounted(() => {
  nextTick(() => (loaded.value = true))
})
</script>

<style lang="scss" scoped>
.comments-container {
  margin-top: 30px;
}
</style>
