<template>
  <div v-editable="blok" class="px-4 space-y-10">
    <Navigation></Navigation>
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
