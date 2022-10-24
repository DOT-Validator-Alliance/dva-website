// Utils

// Layout
import PageLayout from "../layouts/page/page.layout"

// Sections
import ManifestoSection from "../components/manifesto-section/manifesto-section.component"

// Components
import Head from "next/head"

// Hooks
import { useTheme } from "styled-components"
import { useMediaQuery } from "usehooks-ts"

// Types
import { ReactElement } from "react"

const Home = () => {
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
			</Head>

			<ManifestoSection enableAnimation={isMd} />
		</>
	)
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>
}
