<template>
	<div class="giscus"></div>
</template>

<script setup lang="ts">
import ClassWatcher from '../utils/ClassWatcher'
const workOnClassAdd = () => {
	console.log('addd:',)
}
const workOnClassRemoval = () => {
	console.log('moved:',)
}
const classWatcher = new ClassWatcher(document.getElementsByTagName('html')[0], 'trigger', workOnClassAdd, workOnClassRemoval)
</script>

<style lang="scss" scoped>

</style>