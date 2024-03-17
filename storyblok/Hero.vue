<template>
  <div v-editable="blok" class="relative pt-24">
    <img src="../icons/logo.png" class="absolute left-1/3 z-0 w-96 top-20" />
    <div
      class="uppercase h-screen py-64 text-8xl text-white font-bold text-center z-50"
    >
      {{ blok.headline }}
      <p class="my-8 z-50" id="scramble">{{ blok.word_1 }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
console.log(props.blok.word_1);
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
