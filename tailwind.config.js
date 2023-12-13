/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.3s ease',
                'fade-out': 'fadeOut 0.3s ease',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                }
            }
        },
    },
    plugins: [],
    presets: [require('@deriv/quill-design/quill-tailwind/tailwind.config')],
}
