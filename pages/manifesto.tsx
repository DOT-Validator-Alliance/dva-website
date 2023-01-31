// Utils

// Layout
import PageLayout from "../layouts/page/page.layout"

// Sections
import ManifestoSection from "../components/manifesto-section/manifesto-section.component"

// Components
import Head from "../components/head/head.component"

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
      <Head
        title="Validator Alliance"
        description="We are a group of community leaders who decided to dedicate their professional lives to the Polkadot and its diverse ecosystem"
        image={`https://dotvalidators.org/assets/meta-image.png`}
        url={`https://dotvalidators.org${asPath}`}
      >
        <link rel="canonical" href={`https://dotvalidators.org${asPath}`} />
        <meta property="og:type" content="website" />
      </Head>

      <ManifestoSection enableAnimation={isMd} />
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}
