// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { googleFontsModule } from "./src/config/modules/google-fonts-module"

export default defineNuxtConfig({
  srcDir: "src",
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  // config for @nuxtjs/google-fonts
  googleFonts: googleFontsModule.googleFonts
})
