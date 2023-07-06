<template>
  <li>
    <router-link :to="props.link.href" class="px-1 md:px-4 text-sm relative hover:text-white z-50 before:-z-10 before:block before:absolute before:-bottom-[1.42rem] before:w-0 before:h-16 before:left-1/2 before:bg-blue-950 hover:before:w-full hover:before:transition-all hover:before:duration-200 hover:before:ease-in-out hover:before:left-0">{{ props.link.label }}</router-link>
  </li>
</template>

<script setup>
const props = defineProps({
  link: {
    type: Object,
    required: true,
    // validator:
  }
});

</script>

<style scoped>

</style>