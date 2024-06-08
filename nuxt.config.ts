// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    display: 'swap',
    families: {
      Tiny5: true,
      Kanit: {
        wght: [100, 200, 300, 400, 700],
        ital: [100, 200, 300, 400, 700]
      },
    }
  }
})
