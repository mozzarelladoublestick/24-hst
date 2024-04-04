<template>
  <div v-editable="blok" class="relative">
    <Hero></Hero>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
