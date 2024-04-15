<template>
  <div
    v-editable="blok"
    class="container flex flex-col justify-center items-center max-w-5xl mx-auto text-center py-24 relative"
  >
    <div
      class="absolute w-px h-24 md:h-44 bg-white top-16 md:top-6 inset-0 md:inset-44"
    >
      <div
        class="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      ></div>
    </div>

    <div class="flex mb-8">
      <h1 class="text-4xl md:text-8xl text-white font-bold ml-6 md:ml-0 pr-8 md:pr-12">
        {{ dayOfMonth }}.{{ month }}
      </h1>
      <div class="flex flex-col justify-center text-left max-w-80">
       <div class="flex"> <p>{{ weekdayName }}, {{ formattedTime }} Uhr</p></div>
        <p>{{ blok.location }}</p>
  
      </div>
    </div>

    <h3 class="text-3xl md:text-7xl text-orange font-bold uppercase">
      {{ blok.title }}
    </h3>
    <h5 class="text-xl md:text-3xl font-extralight">
      {{ blok.description }}
    </h5>
    <div @click="toggleMore"  class="flex cursor-pointer">
    <h4 v-if="blok.more != ''" class="text-xl uppercase text-orange my-4">mehr</h4><img v-if="blok.more != ''" src="../icons/chevron.svg" class="w-6 mx-4" :class="{'rotate-180':!isVisible}"></img>
  </div>
    <h5 v-show="isVisible" class="font-light text-xl">
      {{ blok.more }}
    </h5>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const isVisible = ref(false);
const date = new Date(props.blok.date);
const dayOfMonth = date.getDate();
const month = date.getMonth() + 1;
const weekday = date.getDay();
const weekdays = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];
const weekdayName = weekdays[weekday];
// Get the hour and minute
const hour = date.getHours();
const minute = date.getMinutes();

// Format hour and minute to HH:mm format
const formattedTime = `${hour.toString().padStart(2, "0")}.${minute
  .toString()
  .padStart(2, "0")}`;

function toggleMore() {
  isVisible.value = true ? !isVisible.value : false;
}
</script>
