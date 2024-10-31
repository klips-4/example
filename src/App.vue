<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script setup>
import {computed} from "vue";
import { useRoute } from "vue-router";
const route = useRoute();



console.log(route.meta)

const layout = computed(() => {

  console.log(route)
  return (route.meta.layout)
})
</script>

<style lang="scss">
@import "./assets/styles/styles.scss";
</style>
