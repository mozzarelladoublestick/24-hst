<template>
  <div v-editable="blok" id="speaker" class="flex items-center justify-center gap-6 my-24">
    
    <img :src="blok.image.filename" class="h-48 w-48 border-b border-white"></img>
    <div class="flex flex-col ">
    <h2 class="text-5xl text-white font-bold  max-w-5xl text-left">
      {{ blok.name }}
    </h2>
    <h3 class="text-2xl mt-4 font-extralight max-w-2xl">
      {{ blok.description }}
    </h3>
</div>

  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
