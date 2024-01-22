/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
    presets: [require('@deriv/quill-design/quill-tailwind/tailwind.config')],
}