// Utils
import theme from "../styles/theme.styles"

// Components
import { GlobalStyles } from "../styles/global.styles"

// Providers
import { ThemeProvider } from "styled-components"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// Types
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app"
import type { NextComponentType } from "next"
import { ReactNode } from "react"

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
	Component,
	pageProps,
}: AppLayoutProps) => {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout || ((page: ReactNode) => page)

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				{getLayout(<Component {...pageProps} />)}
			</ThemeProvider>
		</>
	)
}

export default MyApp
