<template>
  <div v-editable="blok" class="flex justify-center containers my-32">
    <div class="flex flex-col mx-6">
      <h3 class="text-6xl text-orange font-extrabold uppercase mb-2">
        {{ blok.headline }}
      </h3>
      <h5 class="text-xl">{{ text }}</h5>
    </div>
    <button class="button mx-6 pulse">{{ buttontext }}</button>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const buttontext = ref("");
const text = ref("");
if (props.blok.isLive) {
  buttontext.value = props.blok.buttontext;
  text.value = props.blok.text;
} else {
  buttontext.value = props.blok.alternativebuttontext;
  text.value = props.blok.alternativetext;
}
</script>
