/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: { sans: 'Open Sans', title: 'Merriweather' },

		colors: {
			primary: '#CACBD7',
			black: '#000000',
			white: '#FFFFFF',
			success: '#BFD6C5',
			decline: '#D6B4B4',
			gray: '#A5A5A6',
			yellow: '#E1B530',
		},
	},
	plugins: [],
};
