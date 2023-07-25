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
			},
			keyframes: {
				overlayShow: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},
				contentShow: {
					from: { opacity: 0, transform: 'translate(-50%, -40%) scale(0.8)' },
					to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
				}
			},
			animation: {
				overlayShow: 'overlayShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
				contentShow: 'contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1)'
			}
		}
	},
	plugins: []
};
