<template>
  <div
    class="mt-24 h-auto flex flex-col md:flex-row justify-between items-center bg-orange text-white"
  >
    <div class="hidden md:block ml-8 my-12">
      <h5 class="font-bold">Impressum</h5>
      <h5>ÖSM - Christen an der Uni</h5>
      <h5>Brunnhausgasse 21/4</h5>
      <h5>5020 Salzburg</h5>
      <h5>thomas.hagmueller@oesm.at</h5>
      <a href="https://www.oesm.at"><h5>www.oesm.at</h5></a>
    </div>
    <div class="flex text-xl md:text-4xl my-4 md:my-12">
      <a>@oesm_</a>
      <p id="socials">austria</p>
    </div>
    <h3 class="mr-8 hidden md:block my-12">&copy; All Rights Reserved 2024</h3>
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
