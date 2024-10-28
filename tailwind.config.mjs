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
			},
			animation: {
				'rotate-in': 'rotate-in 0.2s',
				'rotate-out': 'rotate-out 0.2s ',
				'fade-in': 'fade-in 0.2s',
				'fade-out': 'fade-in 0.2s reverse',

			},
			keyframes: {
				'rotate-in': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(-180deg)'},
				},
				'rotate-out': {
					'0%': { transform: 'rotate(-180deg)' },
					'100%': { transform: 'rotate(0deg)'},
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1'},
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0'},
				},
			},
		},
	},
	plugins: [],
}
