/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./src/**/*.{js,jsx,ts,tsx}", // adjust this path as necessary for your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  corePlugins: {
    preflight: false,
  }
}