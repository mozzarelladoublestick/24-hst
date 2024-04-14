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
      <h4 @click="goTo('#speaker')" class="my-4">REDNER</h4>
      <h4 @click="goTo('#aboutus')" class="my-4">WER WIR SIND</h4>
      <div class="text-sm mt-60">
        <h5 class="font-bold">Impressum</h5>
        <h5>ÖSM - Christen an der Uni</h5>
        <h5>Leitenweg 7</h5>
        <h5>5113 St. Georgen</h5>
        <h5>ZVR-Zahl: 286541861</h5>
        <h5><a href="mailto:web@oesm.at">web@oesm.at</a></h5>
        <a class="underline" href="https://www.oesm.at"><h5>www.oesm.at</h5></a>
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
useHead({
  title: "Lost & Found by ÖSM",
  meta: [
    {
      name: "description",
      content:
        "Das Lost & Found Event der ÖSM ist ein Projekt, das an verschiedenen Hochschulen, Universitäten und Fachhochschulen im April und Mai 2024 stattfindet. Dabei werden die Themen Zukunft, Erfolg und Identität aus einer christlichen Perspektive beleuchtet.",
    },
  ],
});

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
