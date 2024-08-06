<script setup lang="ts">
let props = defineProps({
  title: {
    type: String,
    required: true,
    default: "My projects",
  },
  number: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: String,
    required: false,
    default: "07/2024",
  },
  slug: {
    type: String,
    required: true,
    default: "project",
  }
});
</script>

<template>
  <NuxtLink :to="'/project/'+slug" class="flex justify-between items-center border-t-2 border-grey-primary border-solid py-10 text-3xl">
    <p class="text-3xl text-grey-primary font-Libre italic"><sup class="text-base">{{ number < 10 ? '0'+number : number }}</sup> {{ title }}</p>
    <p class="max-sm:hidden">{{ date }}</p>
  </NuxtLink>
</template>

<style scoped>

</style>