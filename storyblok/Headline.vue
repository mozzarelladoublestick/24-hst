<template>
  <div v-editable="blok" class="my-12" :id="blok.id">
    <h3
      class="text-white text-center text-3xl md:text-5xl uppercase font-bold container"
    >
      {{ blok.headline }}
    </h3>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
