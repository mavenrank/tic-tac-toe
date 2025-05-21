/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: "#e0f2ff",
                    DEFAULT: "#3b82f6",
                    dark: "#1e3a8a",
                },
                accent: "#f59e0b",
                muted: "#6b7280",
            },
        },
    },
    plugins: [],
};
