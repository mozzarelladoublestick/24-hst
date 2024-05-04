<template>
  <div
    v-editable="blok"
    class="relative h-screen flex items-center justify-center w-full m-0 bg-cover hero-gradient"
  >
    <img
      src="../icons/2024-03_oesm_hst24_logo_2c-weiss-rot.svg"
      alt="Lost & Found Logo"
      class="absolute left-4 md:left-1/3 z-0 w-64 md:w-96 top-6 md:top-20"
    />

    <div
      class="container uppercase text-4xl md:text-8xl text-white font-bold text-center z-30 relative"
    >
      <h1 class="hidden">LOST & FOUND 2024</h1>
      <h1>{{ blok.headline }}</h1>
      <p class="my-2 z-30" id="scramble">{{ blok.word_1 }}</p>
    </div>
  </div>
  <div class="absolute"></div>
</template>

<script setup>
const props = defineProps({ blok: Object });

import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";

import { TextPlugin } from "gsap/TextPlugin";

let words = [props.blok.word_1, props.blok.word_2, props.blok.word_3];

onMounted(() => {
  gsap.registerPlugin(TextPlugin);

  function scrambleWords(words) {
    words.forEach((word, index) => {
      setTimeout(() => {
        scramble(word);
      }, index * 2000); // Delay each word by its index times 1500 milliseconds
    });

    // Call the function again after a delay to continuously scramble the words
    setTimeout(() => {
      scrambleWords(words);
    }, words.length * 2000); // Delay the function call by the total time it takes to scramble all words
  }

  // Call the function initially to start the scrambling process
  scrambleWords(words);
});

function scramble(word) {
  gsap.to("#scramble", {
    duration: 1,
    text: word,
    ease: "none",
  });
}
</script>
