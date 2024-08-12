/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Open Sans'
			},
			colors: {
				transparent: 'transparent',
				citrine: '#FFC700',
				white: '#FFF',
				cynical: '#171717'
			}
		}
	},
	plugins: []
};
