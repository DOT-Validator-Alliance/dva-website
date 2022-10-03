// Utils
import styled from "styled-components"

// Layout
import PageLayout from "../../layouts/page/page.layout"

// Sections
import ValidatorSection from "../../components/validator-section/validator-section.component"

// Components
import Head from "next/head"

// Types
import { ReactElement } from "react"
import { IValidator } from "../../types/validator.types"
import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async () => {
	const requireAll = (r: any) => r.keys().map(r)
	const validators: IValidator[] = requireAll(
		require.context("../../validators", false, /\.json$/)
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

const ValidatorsPage = ({ validators }: IProps) => {
	return (
		<>
			<Head>
				<title>Validator Alliance</title>
				<meta
					name="description"
					content="We are a group of community leaders who decided to dedicate their professional lives to the Polkadot and its diverse ecosystem"
				/>
			</Head>

			<Container>
				{validators.map((validator, idx) => (
					<ValidatorSection key={idx} data={validator} enableAnimation={true} />
				))}
			</Container>
		</>
	)
}

export default ValidatorsPage

ValidatorsPage.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>
}

const Container = styled.div`
	section {
		&:nth-child(1) {
			margin-top: 2rem;
		}
	}
`
