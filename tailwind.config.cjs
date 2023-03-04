/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Open Sans', 'sans-serif'],
			title: ['Merriweather', 'serif'],
		},
		colors: {
			primary: '#CACBD7',
			teal: '#CAD9E3',
			gray: '#DDE4EB',
			black: '#000000',
			white: '#FFFFFF',
			success: '#BFD6C5',
			decline: '#D6B4B4',
			yellow: '#E1B530',
		},
	},
	plugins: [],
};
