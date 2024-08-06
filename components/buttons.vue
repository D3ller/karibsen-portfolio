<script setup lang="ts">
let props = defineProps({
  type: {
    type: String,
    required: true,
    default: 'button-primary'
  },
  to: {
    type: String,
    required: false,
  }
})
</script>

<template>
<div class="text-sm py-2.5 px-5 w-fit cursor-pointer flex items-center duration-500" :class="type" v-if="!to">
  <slot></slot>
</div>

  <NuxtLink :to="to" class="text-sm py-2.5 px-5 w-fit cursor-pointer flex items-center duration-500" :class="type" v-else>
    <slot></slot>
  </NuxtLink>
</template>

<style scoped>

</style>