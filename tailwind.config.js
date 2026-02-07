/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                handwriting: ['"Dancing Script"', 'cursive'],
                sans: ['"Poppins"', 'sans-serif'],
            },
            colors: {
                'rose': '#e11d48',
                'soft-pink': '#fbcfe8',
            }
        },
    },
    plugins: [],
}
