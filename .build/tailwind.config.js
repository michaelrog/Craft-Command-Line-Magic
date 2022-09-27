const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	content: {
		files: [
			'source/index.html',
			'source/**/*.{pcss,css}',
		],
	},
	important: true,
	theme: {
		extend: {
			colors: {
				warm: colors.stone,
				cool: colors.slate,
				green: '#18693B',
				gold: colors.yellow[200],
			},
			fontFamily: {
				'accent': ['Avenir', 'monospace'],
			},
		},
	},
	plugins: [],
	safelist: [],
};
