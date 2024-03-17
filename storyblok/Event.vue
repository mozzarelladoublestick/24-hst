<template>
  <div
    v-editable="blok"
    class="flex flex-col justify-center items-center max-w-5xl mx-auto text-center py-24 relative"
    id="events"
  >
    <div class="absolute w-px h-44 bg-white top-6 inset-1/4">
      <div
        class="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      ></div>
    </div>

    <div class="flex mb-8">
      <h1 class="text-8xl text-white font-bold pr-12">
        {{ dayOfMonth }}.{{ month }}
      </h1>
      <div class="flex flex-col justify-center text-left">
        <p>{{ weekdayName }}</p>
        <p>{{ blok.location }}</p>
        <p>{{ formattedTime }}</p>
      </div>
    </div>

    <h3 class="text-7xl text-orange font-bold uppercase">
      {{ blok.title }}
    </h3>
    <h5 class="text-3xl font-extralight">
      {{ blok.description }}
    </h5>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const date = new Date(props.blok.date);
const dayOfMonth = date.getDate();
const month = date.getMonth() + 1;
const weekday = date.getDay();
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const weekdayName = weekdays[weekday];
// Get the hour and minute
const hour = date.getHours();
const minute = date.getMinutes();

// Format hour and minute to HH:mm format
const formattedTime = `${hour.toString().padStart(2, "0")}.${minute
  .toString()
  .padStart(2, "0")}`;

console.log(dayOfMonth);
</script>
