<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
    <the-header />
    <main class="flex flex-col flex-grow container mx-auto">
      <RouterView />
    </main>
    <the-footer />
</template>

<style scoped>
</style>
