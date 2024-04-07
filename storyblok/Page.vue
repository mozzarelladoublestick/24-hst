<template>
  <div v-editable="blok" class="relative map">
    <Navigation></Navigation>
    <img
      v-show="!showMenu"
      @click="openMenu"
      src="../icons/menu.svg"
      class="absolute z-50 md:hidden right-4 w-8 top-6"
    />
    <img
      v-show="showMenu"
      @click="openMenu"
      src="../icons/close.svg"
      class="absolute z-50 md:hidden right-4 w-8 top-6"
    />
    <div
      v-if="showMenu"
      class="bg-orange absolute text-2xl h-full w-screen z-40 overflow-hidden p-12"
    >
      <h4 @click="goTo('#events')" class="my-4">EVENTS</h4>
      <h4 @click="goTo('#speaker')" class="my-4">SPEAKER</h4>
      <h4 class="my-4">ÜBER UNS</h4>
      <h4 class="my-4">KONTAKT</h4>
    </div>
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
    <Footer></Footer>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
const showMenu = ref(false);
onMounted(() => {
  gsap.registerPlugin(MotionPathPlugin);
  gsap.to("#compass", {
    motionPath: {
      path: "#path",
    },
    // transformOrigin: "50% 50%",
    duration: 100,
    // ease: "power1.inOut",
  });
});
function openMenu() {
  showMenu.value = !showMenu.value;
}

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
function goTo(section) {
  showMenu.value = false;
  gsap.to(window, { duration: 1, scrollTo: section });
}
</script>
