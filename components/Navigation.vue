<template>
    <div class="hidden md:block absolute z-50 left-0 top-0 w-full">
      <div class="flex justify-between items-center m-12 text-orange cursor-pointer">
        <div class="w-2/3">
        <img src="../icons/oesm_logo_white.svg" class="w-24"></img>
        </div>
       <div @click="goTo('#events')">EVENTS</div>
        <div  @click="goTo('#speaker')">REDNER</div>
        <div @click="goTo('#aboutus')">WER WIR SIND</div>
        </div>

    </div>
  </template>
  
  <script setup>
  defineProps({ blok: Object });
  import { gsap } from "gsap";
    import { ScrollToPlugin } from "gsap/ScrollToPlugin";

    gsap.registerPlugin(ScrollToPlugin)
function goTo(section){
  gsap.to(window, { duration: 1, scrollTo: section });
}

  </script>
  