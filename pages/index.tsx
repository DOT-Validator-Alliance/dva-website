// Utils

// Layout
import PageLayout from "../layouts/page/page.layout"

// Sections
import HeroSection from "../components/hero-section/hero-section.component"
import ValidatorSection from "../components/validator-section/validator-section.component"
import JoinOurCommunitySection from "../components/join-our-community-section/join-our-community-section.component"
import AboutSection from "../components/about-section/about-section.component"

// Components
import Head from "next/head"

// Hooks
import { useTheme } from "styled-components"
import { useMediaQuery } from "usehooks-ts"

// Types
import { ReactElement } from "react"
import { IValidator } from "../types/validator.types"
import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async () => {
	const requireAll = (r: any) => r.keys().map(r)
	const validators: IValidator[] = requireAll(
		require.context("../validators", false, /\.json$/)
	)

	const uniqueValidators = validators.filter(
		(validator, index, self) =>
			index === self.findIndex((t) => t.id === validator.id)
	)

	const sortedValidators = uniqueValidators.sort((a, b) => a.id - b.id)

	return {
		props: {
			validators: sortedValidators,
		},
	}
}

interface IProps {
	validators: IValidator[]
}

const Home = ({ validators }: IProps) => {
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

			<HeroSection />

			<section id="validators" style={{ scrollMarginTop: "10rem" }}>
				{validators.map((validator, idx) => (
					<ValidatorSection key={idx} data={validator} enableAnimation={isMd} />
				))}
			</section>

			<JoinOurCommunitySection enableAnimation={isMd} />
			<AboutSection enableAnimation={isMd} />
		</>
	)
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>
}
