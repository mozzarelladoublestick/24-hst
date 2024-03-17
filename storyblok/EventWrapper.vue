<template>
  <div v-editable="blok">
    <div
      class="text-center uppercase font-extrabold text-5xl py-20 flex justify-center"
    >
      {{ blok.headline }}
    </div>
    <div
      class="flex mx-auto justify-between text-center text-extrabold uppercase text-orange items-center px-24 max-w-5xl"
    >
      <div v-for="city in cities">
        <div
          @click="setCity(city)"
          class="cursor-pointer hover:blur-sm"
          :class="{ 'text-white': activeCity === city }"
        >
          {{ city }}
        </div>
      </div>
    </div>
    <StoryblokComponent
      v-for="event in blok[activeCity]"
      :key="event._uid"
      :blok="event"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({ blok: Object });
const activeCity = ref("vienna");
const cities = ["vienna", "linz", "salzburg", "graz", "innsbruck"];
function setCity(city) {
  activeCity.value = city;
}
console.log(props.blok);
</script>
