<template>
  <div v-editable="blok" class="my-12">
    <h3 class="text-orange text-center text-5xl uppercase font-bold">
      {{ blok.headline }}
    </h3>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
