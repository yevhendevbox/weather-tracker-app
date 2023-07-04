<template>
  <header class="p-2 md:px-0 bg-blue-300 shadow">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex flex-col gap-y-1">
        <p class="font-semibold text-lg uppercase m-0">Weather Tracker</p>
        <span class="text-xs">application</span>
      </div>
      <ul class="list-none p-0 flex gap-x-2">
        <base-nav-link v-for="link in links" :key="link.label" :link="link"/>
      </ul>
    </div>
  </header>
</template>

<script setup>
import BaseNavLink from './BaseNavLink.vue';

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/favorite',
    label: 'Favorite',
  }
];

</script>

<style scoped>
</style>