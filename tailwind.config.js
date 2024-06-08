/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['"Kanit"', "sans-serif"],
        tiny: ['"Tiny5"', "sans-serif"]
      },
      backgroundImage: {
        'apricot': "url('/bg_apricot.jpg')",
        'breeze': "url('/bg_breeze.jpg')",
        'lilac': "url('/bg_lilac.jpg')",
        'lime': "url('/bg_lime.jpg')",
        'plum': "url('/bg_plum.jpg')",
        'sunflower': "url('/bg_sunflower.jpg')"
      }
    },
  },
  plugins: [],
}
