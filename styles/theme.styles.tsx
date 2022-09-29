export type ThemeType = typeof light // This is the type definition for my theme object.

export const light = {
	colors: {
		primary: "#9A268D",
		secondary: "#E71F7A",
	},
	background: {
		bodyBackgroundColor: "#000",
	},
	fonts: {
		primary: "#fff",
		secondary: "#898989",
	},
	header: {
		backgroundColor: "#000",
		navItemColor: "#898989",
		activeNavItemColor: "#fff",
		borderColor: "#323232",
		hamColor: "#D9D9D9",
		activeHamColor: `linear-gradient(90deg, rgba(231, 31, 122, 1) 0%, rgba(154, 38, 141, 0) 100%)`,
	},
	heroSection: {
		borderColor: `linear-gradient(90deg, rgba(231, 31, 122, 1) 0%, rgba(217, 217, 217, 0) 100%)`,
	},
	breakpoints: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		xxl: "1536px",
	},
} as const

// export const dark: ThemeType = {
// 	colors: {

// 	},
// 	breakpoints: {
// 		sm: "640px",
// 		md: "768px",
// 		lg: "1024px",
// 		xl: "1280px",
// 		xxl: "1536px",
// 	},
// } as const

const theme = light // set the light theme as the default.
export default theme
