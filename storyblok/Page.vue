<template>
  <div v-editable="blok" class="relative">
    <Navigation></Navigation>
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
    <Footer></Footer>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
