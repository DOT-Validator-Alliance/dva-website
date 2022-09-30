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
			<Row>
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

					<ButtonsContainer>
						<Button>Support us</Button>
						<Button outline>Read our Manifesto</Button>
					</ButtonsContainer>

					{/* <FoundersContainer>
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
					</FoundersContainer> */}
				</Col>
				<Col>
					<HeroFigure>
						<Image
							src="/assets/hero-section/hero-ilu.png"
							alt="hero ilu"
							width={"100%"}
							height={"100%"}
							effect="blur"
							style={{ objectFit: "contain", objectPosition: "center" }}
						/>
					</HeroFigure>
				</Col>

				<LeftBlurFigure>
					<Image
						src="/assets/blops/pink.png"
						alt="bottom blur"
						effect="blur"
						width={"100%"}
						height={"100%"}
						style={{ objectFit: "contain" }}
					/>
				</LeftBlurFigure>
				<RightBlurFigure>
					<Image
						src="/assets/blops/purple.png"
						alt="right blur"
						effect="blur"
						width={"100%"}
						height={"100%"}
						style={{ objectFit: "contain" }}
					/>
				</RightBlurFigure>
			</Row>
		</SectionContainer>
	)
}

export default HeroSection

const LeftBlurFigure = styled.figure`
	position: absolute;
	border-radius: 50%;
	width: 75rem;
	height: 75rem;
	z-index: -1;
	bottom: -30rem;
	left: -38rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		bottom: unset;
		top: -24rem;
		left: -38rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const RightBlurFigure = styled.figure`
	position: absolute;
	border-radius: 50%;
	width: 120rem;
	height: 120rem;
	z-index: -1;
	top: -42rem;
	left: 50%;
	transform: translateX(-50%);

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		left: unset;
		transform: unset;
		top: unset;
		right: -42rem;
		bottom: -42rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const SectionContainer = styled.section`
	margin-top: 0rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 4rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Row = styled.div`
	position: relative;
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: 1fr;
	padding: 0 2rem;
	max-width: 125rem;
	margin: 0 auto 0;
	/* border: 1px solid blue; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: minmax(44.5rem, 1fr) 1fr;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Col = styled.div`
	/* border: 1px solid red; */

	&:nth-child(1) {
		margin-top: 2rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			margin-top: 6rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}

	&:nth-child(2) {
		/* border: 1px solid green; */
		justify-self: center;
		align-self: center;
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

const ButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	margin-top: 2rem;
	gap: 1.5rem;
	max-width: 45rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr 1fr;
	}
`

const Border = styled.div`
	margin: 1rem 0;
	height: 0.2rem;
	width: 80%;
	background: ${({ theme }) => theme.heroSection.borderColor};
`

const HeroFigure = styled.figure`
	max-width: 60rem;
	width: 100%;
	max-height: 100rem;
	/* height: 100%; */
`

// const FoundersContainer = styled.div`
// 	p {
// 		font-size: 1.2rem;
// 		margin-bottom: 0.5rem;
// 		color: #cacaca;
// 	}
// `
