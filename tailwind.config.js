import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: true,
	theme: {
		extend: {
			fontFamily: {
				mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono],
				mabryProRegular: [
					"'MabryPro-regular'",
					...defaultTheme.fontFamily.sans
				],
				mabryProBold: ["'MabryPro-bold'", ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
