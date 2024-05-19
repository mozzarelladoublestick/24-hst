<template>
  <div v-editable="blok" class="max-w-80">
    <iframe
      :src="blok.video_link.url"
      title="Lost &amp; Found -  Auf der Suche nach Zukunft - Talk // Q&amp;A // Live-Art - Dr. Christian Bensel"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      class="aspect-video"
    ></iframe>
    <div class="text-left mt-6">
      <h3 class="text-xl">{{ blok.title }}</h3>
      <h5 class="text-md">{{ blok.description }}</h5>
      <h5 class="text-sm text-orange">{{ blok.info }}</h5>
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
