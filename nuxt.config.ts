// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-icon", "@pinia-plugin-persistedstate/nuxt"],
  css: ["~/assets/css/main.css"],
  components: {
    dirs: [
      "~/components", // Por defecto
      "~/components/auth", // Carpeta adicional
      "~/components/ui", // Carpeta adicional
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
