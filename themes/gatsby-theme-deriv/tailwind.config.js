const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [join(
        __dirname,
        'src/**/*.{ts,tsx,js,jx}',
      ),],
    theme: {
        extend: {},
    },
    plugins: [],
    presets: [require('../../tailwind.config')],
}