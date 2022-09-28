// Utils
import styled from "styled-components"

// Components
import Footer from "../../components/footer/footer.component"
import Header from "../../components/header/header.component"

// Types
export interface IProps {
	children: React.ReactNode | React.ReactNode[]
}

const PageLayout: React.FC<IProps> = ({ children }) => {
	return (
		<LayoutContainer>
			<Header />
			<main>{children}</main>
			<Footer />
		</LayoutContainer>
	)
}

export default PageLayout

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	main {
		flex-grow: 1;
	}
`
