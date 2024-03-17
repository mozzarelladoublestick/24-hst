<template>
    <div class="flex justify-between items-center m-12 text-orange">
        <div class="w-1/2">
        <img src="../icons/oesm_logo_white.svg" class="w-24"></img>
        </div>
       <div @click="goToEvents()">EVENTS</div>
        <div>SPEAKER</div>
        <div>ÜBER UNS</div>
        <div>KONTAKT</div>
    </div>
  </template>
  
  <script setup>
  defineProps({ blok: Object });
  import { gsap } from "gsap";
    import { ScrollToPlugin } from "gsap/ScrollToPlugin";

    gsap.registerPlugin(ScrollToPlugin)
function goToEvents(){
  gsap.to(window, { duration: 1, scrollTo: "#events" });
}

  </script>
  