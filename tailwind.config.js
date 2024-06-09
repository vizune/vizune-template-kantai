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
      backgroundImage: {
        'apricot-girl': "url('/bg_apricot.jpg')",
        'breeze-girl': "url('/bg_breeze.jpg')",
        'lilac-girl': "url('/bg_lilac.jpg')",
        'lime-girl': "url('/bg_lime.jpg')",
        'plum-girl': "url('/bg_plum.jpg')",
        'sunflower-girl': "url('/bg_sunflower.jpg')"
      },
      colors: {
        'apricot': '#febb99',
        'breeze': '#b3daec',
        'lilac': '#afaab8',
        'lime': '#baf7c3',
        'plum': '#ddbbc3',
        'sunflower': '#faffaf'
      },
      fontFamily: {
        kanit: ['"Kanit"', "sans-serif"],
        tiny: ['"Tiny5"', "sans-serif"]
      },
    },
  },
  plugins: [],
}
