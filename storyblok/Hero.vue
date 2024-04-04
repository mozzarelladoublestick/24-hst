<template>
  <div
    v-editable="blok"
    class="relative md:pt-32 w-full m-0 bg-cover hero-gradient h-screen overflow-hidden"
  >
    <img
      src="../icons/2024-03_oesm_hst24_logo_2c-weiss-rot.svg"
      class="absolute left-1/2 md:left-1/3 z-0 w-40 md:w-80 top-20"
    />
    <div
      class="flex items-center flex-col justify-center md:block uppercase h-screen py-64 text-5xl md:text-8xl text-white font-bold text-center z-50 relative"
    >
      <p id="coming">COMING</p>
      <p id="scramble" class="my-0 md:my-8 z-50">SOON</p>
      <p class="m-4 text-orange font-light text-2xl md:text-4xl">stay tuned</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

onMounted(() => {
  gsap.registerPlugin(TextPlugin);

  const comingWords = ["coming", "soon"]; // Define the array of words for "COMING"
  const soonWords = ["soon", "coming"]; // Define the array of words for "SOON"

  function scrambleWords(words, elementId) {
    words.forEach((word, index) => {
      setTimeout(() => {
        scramble(word, elementId);
      }, index * 3000); // Delay each word by its index times 2000 milliseconds
    });

    // Call the function again after a delay to continuously scramble the words
    setTimeout(() => {
      scrambleWords(words, elementId);
    }, words.length * 3000); // Delay the function call by the total time it takes to scramble all words
  }

  // Call the function initially to start the scrambling process for both paragraphs
  scrambleWords(comingWords, "coming");
  scrambleWords(soonWords, "scramble");
});

function scramble(word, elementId) {
  gsap.to(`#${elementId}`, {
    duration: 1,
    text: word,
    ease: "none",
  });
}
</script>
