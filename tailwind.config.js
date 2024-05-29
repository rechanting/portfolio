/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('tailwind-typewriter')({
			wordsets: {
				info: {
					words: ['a programmer.', 'from Egypt, living in the USA.', 'a sophomore in highschool.', 'a triplet.'],
					delay:  2
				}
			}
		})
	],
}
