<template>
  <div class="comments-container"
       v-if="!page.frontmatter.hideComment">
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

const { isDark, page } = useData()
</script>

<style lang="scss" scoped>
.comments-container {
  margin-top: 30px;
}
</style>
