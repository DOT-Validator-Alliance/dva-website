// Utils
import { addDecorator } from "@storybook/react"
import theme from "../styles/theme.styles"

// Providers
import { ThemeProvider } from "styled-components"
// import { RouterContext } from "next/dist/shared/lib/router-context" // next 12

// Styles
import { GlobalStyles } from "../styles/global.styles"

addDecorator((story) => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<div className="storybook-preview">{story()}</div>
	</ThemeProvider>
))

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	// nextRouter: {
	// 	Provider: RouterContext.Provider,
	// },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
