<script setup lang="ts">
let props = defineProps({
  lang: {
    type: Object,
    required: true,
  },
})
</script>

<template>
<div class="p-8 flex flex-col gap-2">
  <icon class="w-8 h-8" :name="lang.icon"/>

  <p class="font-DM font-medium">{{ lang.name }}</p>
</div>
</template>

<style scoped>

</style>