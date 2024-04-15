export default defineNuxtConfig({
  css: ["@/assets/css/font.css", "@/assets/css/base.css"],
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: "vumG3lz0YrkDtEwSRkr0Pwtt",
        apiOptions: {
          region: "", // Set 'US" if your space is created in US region (EU default)
        },
      },
    ],
    "@nuxtjs/tailwindcss",
    ["@nuxtjs/seo"],
    ["@nuxtjs/sitemap"],
    "@nuxt/image",
  ],
  site: {
    url: "https://lost-found.at",
    name: "Lost &  Found von ÖSM",
    description:
      "Das Lost & Found Event der ÖSM ist ein Projekt, das an verschiedenen Hochschulen, Universitäten und Fachhochschulen im April und Mai 2024 stattfindet. Dabei werden die Themen Zukunft, Erfolg und Identität aus einer christlichen Perspektive beleuchtet.",
    defaultLocale: "de",
  },
});
