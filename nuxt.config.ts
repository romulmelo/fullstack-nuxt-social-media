// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { colorModeModule } from "./src/config/modules/color-mode-module"
import { googleFontsModule } from "./src/config/modules/google-fonts-module"

export default defineNuxtConfig({
  srcDir: "src",
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts"
  ],
  // config for @nuxtjs/google-fonts
  googleFonts: googleFontsModule.googleFonts,
  // config for @nuxtjs/color-mode
  colorMode: colorModeModule.colorMode
})
