<template>
  <div v-editable="blok" id="events">
    <div
<<<<<<< HEAD
=======
      class="relative md:flex mx-auto justify-between text-center text-extrabold uppercase text-orange items-center px-auto md:px-24 max-w-5xl"
>>>>>>> main
    >
      <img
        src="../icons/compass.svg"
        class="icon absolute right-0 z-0 w-80 top-96 opacity-80"
      />
      <select
        class="block md:hidden text-left mx-auto px-auto"
        @change="setCity($event.target.value)"
      >
        <option
          v-for="city in cities"
          :value="city"
          :key="city"
          class="text-xl"
        >
          {{ city }}
        </option>
      </select>

      <div class="hidden md:block" v-for="city in cities">
        <div
          @click="setCity(city)"
          class="cursor-pointer hover:blur-sm"
          :class="{ 'text-white': activeCity === city }"
        >
          {{ city }}
        </div>
      </div>
    </div>
    <h3
      class="py-24 text-3xl container text-center font-light"
      v-if="blok[activeCity].length == 0"
    >
      {{ blok.noevents }}
    </h3>
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
const activeCity = ref("linz");
const cities = ["linz", "salzburg", "graz", "wien", "innsbruck"];
function setCity(city) {
  activeCity.value = city;
}
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".icon", {
    scrollTrigger: {
      trigger: ".icon",
      toggleActions: "restart pause reverse reverse",
      start: "top center",
      scrub: 1,
      pin: true,
    }, // start animation when ".box" enters the viewport
    rotation: 360,
    // x: 1000,
    // duration: 2,
  });
});
</script>
