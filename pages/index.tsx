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
import { IValidator, IValidatorItem } from "../types/validator.types"
import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async () => {
	const requireAll = (r: any) => r.keys().map(r)
	const validators: IValidator[] = requireAll(
		require.context("../validators", false, /\.json$/)
	)

	const uniqueValidators = validators.filter(
		(validator, index, self) =>
			index === self.findIndex((t) => t.id === validator.id)
	)

	const sortedValidators = uniqueValidators.sort((a, b) => a.id - b.id)

	const random = (arr: IValidatorItem[], n: number) => {
		let result = new Array(n),
			len = arr.length,
			taken = new Array(len)
		if (n > len)
			throw new RangeError("getRandom: more elements taken than available")
		while (n--) {
			let x = Math.floor(Math.random() * len)
			result[n] = arr[x in taken ? taken[x] : x]
			taken[x] = --len in taken ? taken[len] : len
		}
		return result
	}

	const validatorsWithRandomValidators = sortedValidators.map((validator) => {
		const randomValidators =
			validator.validators.length < 3
				? validator.validators
				: random(validator.validators, 3)

		return {
			...validator,
			validators: randomValidators,
		}
	})

	return {
		props: {
			validators: validatorsWithRandomValidators,
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

			<HeroSection enableAnimation={isMd} />

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
