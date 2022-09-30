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
					<Image
						src="/assets/hero-section/hero-ilu.png"
						alt="hero ilu"
						width={"100%"}
					/>
				</HeroFigure>
			</Col>
		</SectionContainer>
	)
}

export default HeroSection

const SectionContainer = styled.section`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: 1fr;
	padding: 5rem 2rem;
	max-width: 120rem;
	margin: 4rem auto 0;
	/* border: 1px solid blue; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr 1fr;
		padding: 0 3rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 0 7rem;
		}
	}
`

const Col = styled.div`
	/* border: 1px solid red; */

	&:nth-child(2) {
		/* border: 1px solid green; */
		justify-self: center;
		grid-row: 1 / 3;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			grid-row: unset;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
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
	background: ${({ theme }) => theme.heroSection.borderColor};
`

const HeroFigure = styled.figure``

const FoundersContainer = styled.div`
	p {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		color: #cacaca;
	}
`
