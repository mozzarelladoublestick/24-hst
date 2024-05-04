<template>
  <div
    v-editable="blok"
    id="speaker"
    class="flex md:flex-row flex-col items-center justify-center gap-6 my-24 container"
  >
    <img
      :src="blok.image.filename"
      alt="Redner Foto"
      class="h-48 w-48 border-b border-white filter grayscale object-cover"
    ></img>
    <div class="flex flex-col items-center md:items-start">
      <h2
        class="text-2xl md:text-4xl text-white font-medium text-center md:text-left "
      >
        {{ blok.name }}
      </h2>
      <h5
        class="text-lg md:text-xl mt-4 font-extralight max-w-xl text-center md:text-left mb-2"
      >
        {{ blok.description }}
      </h5>
      <h4 class="text-orange">
        <a :href="url">
          {{ blok.linktext }}
        </a>
      </h4>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const url = ref("");
onMounted(() => {
  url.value = props.blok.link.url;
});
</script>
