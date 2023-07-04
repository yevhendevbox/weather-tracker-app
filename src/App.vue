<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class=" flex flex-col h-screen">
    <the-header />
    <RouterView />
    <the-footer />
  </div>
</template>

<style scoped>
</style>
