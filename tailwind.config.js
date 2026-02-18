/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#253e8d",
                secondary: "#f5f8ff",
                deepblue: "#0e2247",
                lightblue: "#e8f0fe",
                darkgray: "#2d3748",
            },
            fontFamily: {
                sans: ['Inter', 'Roboto', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
