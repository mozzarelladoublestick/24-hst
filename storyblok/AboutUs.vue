<template>
  <div
    v-editable="blok"
    class="flex flex-col md:flex-row container justify-center"
  >
    <div class="flex flex-col md:mx-6">
      <h2 class="text-orange font-extrabold text-2xl md:text-3xl mb-4">
        {{ blok.headline }}
      </h2>
      <h5 class="font-extralight mb-4 text-lg md:text-2xl">
        {{ blok.description }}
      </h5>
      <a :href="url" class="button md:m-0 mb-6">
        {{ blok.buttontext }}
      </a>
    </div>
    <img
      :src="blok.image.filename"
      class="w-full md:w-1/2 md:mx-6 object-cover filter grayscale"
    ></img>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const url = ref("");
onMounted(() => {
  url.value = props.blok.link.url;
});
</script>
