<template>
  <div
    v-editable="blok"
    class="relative map"
    :class="{ 'overflow-hidden': showMenu }"
  >
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
      <h4 @click="goTo('#aboutus')" class="my-4">ÜBER UNS</h4>
      <div class="text-sm mt-96">
        <h5 class="font-bold">Impressum</h5>
        <h5>ÖSM - Christen an der Uni</h5>
        <!-- <h5>Brunnhausgasse 21/4</h5> -->
        <!-- <h5>5020 Salzburg</h5> -->
        <!-- <h5>thomas.hagmueller@oesm.at</h5> -->
        <a href="https://www.oesm.at"><h5>www.oesm.at</h5></a>
      </div>
      <h3 class="text-xs mt-12">&copy; All Rights Reserved 2024</h3>
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
