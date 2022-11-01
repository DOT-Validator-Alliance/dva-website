// Utils

// Layout
import PageLayout from "../layouts/page/page.layout"

// Sections
import ManifestoSection from "../components/manifesto-section/manifesto-section.component"

// Components
import Head from "next/head"

// Hooks
import { useRouter } from "next/router"
import { useTheme } from "styled-components"
import { useMediaQuery } from "usehooks-ts"

// Types
import { ReactElement } from "react"

const Home = () => {
	const { asPath } = useRouter()
	const theme = useTheme()
	const isMd = useMediaQuery(`(min-width: ${theme.breakpoints.md})`)

	return (
		<>
			<Head>
				<title>Validator Alliance</title>
				<meta
					name="description"
					content="We are a group of community leaders who decided to dedicate their professional lives to the Polkadot and its diverse ecosystem"
				/>

				<link rel="canonical" href={`https://dotvalidators.org${asPath}`} />

				{/* <!-- Primary Meta Tags --> */}
				<meta name="title" content={"Validator Alliance"} />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content={`https://dotvalidators.orgl${asPath}`}
				/>
				<meta property="og:title" content="Validator Alliance" />
				<meta
					property="og:description"
					content="We are a group of community leaders who decided to dedicate their professional lives to the Polkadot and its diverse ecosystem"
				/>
				<meta property="og:image" content="/assets/aliancelogo-v5.svg" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content={`https://dotvalidators.org${asPath}`}
				/>
				<meta property="twitter:title" content="Validator Alliance" />
				<meta
					property="twitter:description"
					content="We are a group of community leaders who decided to dedicate their professional lives to the Polkadot and its diverse ecosystem"
				/>
				<meta property="twitter:image" content="/assets/aliancelogo-v5.svg" />
			</Head>

			<ManifestoSection enableAnimation={isMd} />
		</>
	)
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>
}
