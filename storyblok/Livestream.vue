<template>
  <div
    v-editable="blok"
    class="flex md:flex-row flex-col justify-center items-center containers my-32"
  >
    <div class="flex flex-col mx-6">
      <h3
        class="text-2xl md:text-6xl text-orange font-extrabold uppercase mb-2"
      >
        {{ blok.headline }}
      </h3>
      <h4 class="text-xl mb-4 md:mb-0 font-extralight">{{ text }}</h4>
    </div>
    <a :href="url" class="button mx-6">{{ buttontext }}</a>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const buttontext = ref("");
const text = ref("");
const url = ref("");
if (props.blok.isLive) {
  buttontext.value = props.blok.buttontext;
  text.value = props.blok.text;
} else {
  buttontext.value = props.blok.alternativebuttontext;
  text.value = props.blok.alternativetext;
}
onMounted(() => {
  url.value = props.blok.link.url;
});
</script>
