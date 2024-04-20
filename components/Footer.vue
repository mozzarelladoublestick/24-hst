<template>
  <div
    class="mt-24 h-auto flex flex-col md:flex-row justify-between items-center bg-orange text-white"
  >
    <div class="hidden lg:block ml-8 my-12">
      <h5 class="font-bold">Impressum</h5>
      <h5>ÖSM - Christen an der Uni</h5>
      <h5>Leitenweg 7</h5>
      <h5>5113 St. Georgen</h5>
      <h5>ZVR-Zahl: 286541861</h5>
      <h5><a href="mailto:web@oesm.at">web@oesm.at</a></h5>
      <a class="underline" href="https://www.oesm.at"><h5>www.oesm.at</h5></a>
      <h5 class="mt-4 cursor-pointer" @click="openDataprivacy">
        Datenschutzerklärung
      </h5>
    </div>
    <div class="flex text-xl md:text-4xl my-4 md:my-12">
      <a>@oesm_</a>
      <p id="socials">austria</p>
    </div>
    <h3 class="mr-8 hidden md:block my-12">
      &copy; Alle Rechte vorbehalten 2024
    </h3>
  </div>
  <Dataprivacy
    v-if="open"
    class="absolute bg-orange w-full overflow-hidden"
  ></Dataprivacy>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";

import { TextPlugin } from "gsap/TextPlugin";

let social_cities = [
  "austria",
  "wien",
  "linz",
  "ibk",
  "salzburg",
  "klagenfurt",
];

onMounted(() => {
  gsap.registerPlugin(TextPlugin);

  function scrambleWords(social_cities) {
    social_cities.forEach((word, index) => {
      setTimeout(() => {
        scramble(word);
      }, index * 2000); // Delay each word by its index times 1500 milliseconds
    });

    // Call the function again after a delay to continuously scramble the words
    setTimeout(() => {
      scrambleWords(social_cities);
    }, social_cities.length * 2000); // Delay the function call by the total time it takes to scramble all words
  }

  // Call the function initially to start the scrambling process
  scrambleWords(social_cities);
});

function scramble(word) {
  gsap.to("#socials", {
    duration: 1,
    text: word,
    ease: "none",
  });
}
const open = ref(false);
function openDataprivacy() {
  open.value = !open.value;
}
</script>
