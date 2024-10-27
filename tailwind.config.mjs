/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "black",
				secondary: "#6C6C6C",
				'accent-1': "#00653e",
				'accent-2': "#1F1F1F"
			},
			backgroundColor: {
				primary: "white",
				secondary: "#f7f7f7"
			}
		},
	},
	plugins: [],
}
