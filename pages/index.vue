<script setup>
const story = await useAsyncStoryblok(
  "home",
  { version: "draft" },
  { customParent: "https://app.storyblok.com" }
);
const router = useRouter();

router.addRoute({ name: "de", path: "/de" });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
