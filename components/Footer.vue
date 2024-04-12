<template>
  <div
    class="mt-24 h-44 flex justify-between items-center bg-orange text-white"
  >
    <div class="ml-8">
      <h5 class="font-bold">ÖSM - Christen an der Uni</h5>
      <h5>Adresszeile 1</h5>
      <h5>1234 Postleitzahl</h5>
      <h5>Kontaktinformationen</h5>
    </div>
    <div class="flex text-4xl">
      <a>@oesm_</a>
      <p id="socials">austria</p>
    </div>
    <h3 class="mr-8">&copy; All Rights Reserved 2024</h3>
  </div>
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
</script>
