/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {
			colors: {
				'card': '#fff',
				'primary': {
					'50': '#fffbf2',
					'100': '#fcf5e6',
					'200': '#fae5c0',
					'300': '#f7d299',
					'400': '#f2a252',
					'500': '#ed6b0f',
					'600': '#d65c0b',
					'700': '#b34607',
					'800': '#8f3306',
					'900': '#6b2203',
					'950': '#451301',
					'DEFAULT': '#ED6B0F'
				},
				'secondary': {
					'50': '#f5f5f5',
					'100': '#ebebeb',
					'200': '#cccccc',
					'300': '#adadad',
					'400': '#707070',
					'500': '#333333',
					'600': '#2e2929',
					'700': '#261d1d',
					'800': '#1f1212',
					'900': '#170a0a',
					'950': '#0f0404',
					'DEFAULT': '#333333'
				}
			}
		},
	},
	plugins: [],
}
