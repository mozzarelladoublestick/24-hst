<template>
  <div v-editable="blok" id="speaker" class="flex items-center justify-center gap-6 my-24">
    
    <img :src="blok.image.filename" class="h-48 w-48 border-b border-white filter grayscale"></img>
    <div class="flex flex-col ">
    <h2 class="text-4xl text-white font-medium  max-w-5xl text-left w-24">
      {{ blok.name }}
    </h2>
    <h3 class="text-2xl mt-4 font-extralight max-w-2xl">
      {{ blok.description }}
    </h3>
    <h4 class="text-orange">
      <a :href="url">
      {{ blok.linktext }}
    </a>
    </h4>
</div>

  </div>
</template>

<script setup>
const props=defineProps({ blok: Object });
const url=ref("");
onMounted(() => {
url.value=props.blok.link.url;
console.log(url.value);
});
</script>
