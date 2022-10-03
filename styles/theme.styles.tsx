export type ThemeType = typeof light // This is the type definition for my theme object.

export const light = {
	colors: {
		primary: "#9A268D",
		secondary: "#E71F7A",
		borderColor: `linear-gradient(90deg, rgba(231, 31, 122, 1) 0%, rgba(217, 217, 217, 0) 100%)`,
		buttonColor: `#fff`,
		buttonOutlineColor: `#CACACA`,
		buttonOutline: "1px solid #898989",
		buttonBackground: `linear-gradient(90deg, rgba(154, 38, 141, 1) 0%, rgba(231, 31, 122, 1) 51%, rgba(154, 38, 141, 1) 100%)`,
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
		activeHamColor: `linear-gradient(90deg, rgba(231, 31, 122, 1) 0%, rgba(154, 38, 141, 1) 100%)`,
	},
	heroSection: {},
	validatorSection: {
		labelColor: "#CACACA",
		listItemBackgroundColor:
			"linear-gradient(90deg, rgba(116, 116, 116, 0.19) 13.66%, rgba(255, 255, 255, 0) 90.84%)",
		listItemTitleColor: "#CACACA",
		listItemAddressColor: "#898989",
		linkColor: `linear-gradient(90deg, #E71F7A 0%, #9A268D 108.06%)`,
		backButtonColor:
			"linear-gradient(270.07deg, #E71F7A 4.69%, #9A268D 95.19%)",
	},
	joinOurCommunitySection: {
		backgroundColor:
			"linear-gradient(90.38deg, #9A268D 13.66%, #E71F7A 90.84%)",
		descriptionColor: "#CACACA",
	},
	aboutSection: {
		itemBackgroundColor:
			"linear-gradient(89.37deg, rgba(116, 116, 116, 0.19) 13.81%, rgba(255, 255, 255, 0) 115.34%)",
		itemColor: "#CACACA",
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
