<template>
  <header class="sticky top-0 p-2.5 md:px-0 bg-blue-300 shadow">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex flex-col">
        <p class="font-semibold text-sm uppercase m-0">Weather Tracker</p>
        <span class="text-xs">application</span>
      </div>
      <ul class="list-none p-0 flex gap-x-1">
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