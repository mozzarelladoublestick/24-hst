<template>
  <div v-editable="blok" class="flex container justify-center">
    <div class="flex flex-col mx-6">
      <h2 class="text-orange font-extrabold text-4xl mb-4">
        {{ blok.headline }}
      </h2>
      <h5 class="font-light mb-4 text-xl">
        {{ blok.description }}
      </h5>
      <a :href="url" class="button">
        {{ blok.buttontext }}
      </a>
    </div>
    <img :src="blok.image.filename" class="w-1/2 mx-6 object-cover filter grayscale"></img>
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
