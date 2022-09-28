// Utils
import Head from "next/head"

// Layout
import PageLayout from "../layouts/page/page.layout"

// Types
import { ReactElement } from "react"

const Home = () => {
	return (
		<>
			<Head>
				<title>Validator Alliance</title>
				<meta
					name="description"
					content="We are a group of community leaders who decided to dedicate their professional lives to the Polkadot and its diverse ecosystem"
				/>
			</Head>

			<h1>Hello World</h1>
		</>
	)
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>
}
