<template>
  <div
    v-editable="blok"
    class="container flex flex-wrap gap-20 py-12 mx-auto justify-center"
  >
    <StoryblokComponent
      v-for="video in blok.videos"
      :key="video._uid"
      :blok="video"
    />
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
