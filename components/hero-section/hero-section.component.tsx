// Utils
import styled from "styled-components"

// Components
import Image from "../image/image.component"
import FlexContainer from "../flex-container/flex-container.component"
import Button from "../button/button.component"

const HeroSection: React.FC = () => {
	const founders = [
		{
			image: {
				src: "/assets/hero-section/founders/founder-1.png",
				alt: "Logo",
			},
		},
		{
			image: {
				src: "/assets/hero-section/founders/founder-2.png",
				alt: "Logo",
			},
		},
		{
			image: {
				src: "/assets/hero-section/founders/founder-3.png",
				alt: "Logo",
			},
		},
		{
			image: {
				src: "/assets/hero-section/founders/founder-4.png",
				alt: "Logo",
			},
		},
		{
			image: {
				src: "/assets/hero-section/founders/founder-5.png",
				alt: "Logo",
			},
		},
		{
			image: {
				src: "/assets/hero-section/founders/founder-6.png",
				alt: "Logo",
			},
		},
		{
			image: {
				src: "/assets/hero-section/founders/founder-7.png",
				alt: "Logo",
			},
		},
	]

	return (
		<SectionContainer>
			<Col>
				<Title>
					<span>DOT Validator</span>
					<span>Alliance</span>
				</Title>
				<Border />
				<Description>
					We are a group of community leaders who decided to dedicate their
					professional lives to the Polkadot and its diverse ecosystem.
				</Description>

				<FlexContainer
					top="2rem"
					bottom="2rem"
					gap="1.5rem"
					justifyContent="start"
				>
					<Button>Support us</Button>
					<Button outline>Read our Manifesto</Button>
				</FlexContainer>

				<FoundersContainer>
					<p>Founded by:</p>
					<FlexContainer gap="1.5rem" justifyContent="start" wrap="wrap">
						{founders.map((founder, index) => (
							<Image
								key={index}
								src={founder.image.src}
								alt={founder.image.alt}
								// width={100}
								// height={100}
							/>
						))}
					</FlexContainer>
				</FoundersContainer>
			</Col>
			<Col>
				<HeroFigure>
					<Image src="/assets/hero-section/hero-ilu.png" alt="hero ilu" />
				</HeroFigure>
			</Col>
		</SectionContainer>
	)
}

export default HeroSection

const SectionContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2rem;
	padding: 5rem 3rem;
	max-width: 120rem;
	margin: 0 auto;
`

const Col = styled.div`
	/* border: 1px solid red; */

	&:nth-child(2) {
		/* border: 1px solid green; */
		justify-self: center;
	}
`

const Title = styled.h1`
	font-size: 5rem;
	line-height: 1.2;
	color: ${({ theme }) => theme.fonts.primary};

	span {
		display: block;
	}
`
const Description = styled.p`
	max-width: 43.8rem;
	color: ${({ theme }) => theme.fonts.secondary};
`

const Border = styled.div`
	margin: 1rem 0;
	height: 0.2rem;
	width: 80%;
	background: linear-gradient(
		90deg,
		rgba(231, 31, 122, 1) 0%,
		rgba(217, 217, 217, 0) 100%
	);
`

const HeroFigure = styled.figure``

const FoundersContainer = styled.div`
	p {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		color: #cacaca;
	}
`
