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
			<main>
				{children}
				<Footer />
			</main>
		</LayoutContainer>
	)
}

export default PageLayout

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;

	@supports (overflow-x: clip) {
		overflow-x: clip !important;
	}
	@supports not (overflow-x: clip) {
		overflow-x: hidden;
		height: -webkit-fill-available;
	}

	main {
		position: relative;
		margin: 10rem 0 0;
		flex-grow: 1;

		@supports (overflow-x: clip) {
			overflow-x: clip !important;
		}
		@supports not (overflow-x: clip) {
			overflow-x: hidden;
			height: -webkit-fill-available;
		}
	}
`
