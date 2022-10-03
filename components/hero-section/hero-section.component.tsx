// Utils
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Image from "../image/image.component"
import FlexContainer from "../flex-container/flex-container.component"
import Button from "../button/button.component"
import Border from "../border/border.component"

// Hooks
import { useMediaQuery } from "usehooks-ts"
import { useTheme } from "styled-components"

const HeroSection: React.FC = () => {
	const theme = useTheme()
	const isMd = useMediaQuery(`(min-width: ${theme.breakpoints.md})`)

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
					<Title
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 1,
							// cubic-bezier(.5,0,.56,.99)
							ease: [0.5, 0, 0.56, 0.99],
						}}
					>
						<span>DOT Validator</span>
						<span>Alliance</span>
					</Title>
					<Border
						initial={{
							opacity: 0,
							// width: 0
							x: 100,
						}}
						animate={{
							opacity: 1,
							// width: "auto"
							x: 0,
						}}
						transition={{
							delay: 1.8,
							duration: 1,
							ease: [0.5, 0, 0.56, 0.99],
						}}
					/>
					<Description
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 3,
							duration: 0.7,
							ease: [0.5, 0, 0.56, 0.99],
						}}
					>
						We are a group of community leaders who decided to dedicate their
						professional lives to the Polkadot and its diverse ecosystem.
					</Description>

					<ButtonsContainer
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 3.7,
							duration: 0.7,
							ease: [0.5, 0, 0.56, 0.99],
						}}
					>
						<Button>Support us</Button>
						<Button outline>Read our Manifesto</Button>
					</ButtonsContainer>

					<FoundersContainer
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 4.4,
							duration: 0.7,
							// ease
							ease: [0.5, 0, 0.56, 0.99],
						}}
					>
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
				<Col
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						// delay: 3.7,
						duration: 2,
						// ease: [0.5, 0, 0.56, 0.99],
					}}
				>
					<HeroFigure
						// initial={{ y: 0 }}
						whileInView={
							isMd ? { y: [0, -15, 0], scale: [1, 0.97, 1] } : undefined
						}
						transition={{
							duration: 4,
							repeat: Infinity,
							delay: 5.1,

							// ease: [0.64, 0.33, 0.64, 0.86],
						}}
					>
						<Image
							src="/assets/hero-section/hero-ilu-v2.png"
							alt="hero ilu"
							width={"100%"}
							height={"100%"}
							effect="blur"
							style={{ objectFit: "contain", objectPosition: "center" }}
						/>
					</HeroFigure>
				</Col>

				<LeftBlurFigure
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 1,
						delay: 0.5,
						ease: [0.5, 0, 0.56, 0.99],
					}}
				>
					<Image
						src="/assets/blops/home_pink.png"
						alt="bottom blur"
						effect="blur"
						width={"100%"}
						height={"100%"}
						style={{ objectFit: "contain" }}
					/>
				</LeftBlurFigure>
				<RightBlurFigure
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 1,
						delay: 0.5,
						ease: [0.5, 0, 0.56, 0.99],
					}}
				>
					<Image
						src="/assets/blops/home_purple.png"
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

const LeftBlurFigure = styled(motion.figure)`
	position: absolute;
	border-radius: 50%;
	width: 75rem;
	height: 75rem;
	z-index: -1;
	bottom: -30rem;
	left: -38rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			bottom: unset;
			top: -24rem;
			left: -38rem;
		}
	}
`

const RightBlurFigure = styled(motion.figure)`
	position: absolute;
	border-radius: 50%;
	width: 120rem;
	height: 120rem;
	z-index: -1;
	top: -42rem;
	left: 50%;
	transform: translateX(-50%);

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			left: unset;
			transform: unset;
			top: unset;
			right: -42rem;
			bottom: -42rem;
		}
	}
`

const SectionContainer = styled.section`
	margin-top: 0rem;
	margin-bottom: 10rem;
	padding: 0 2rem;
	/* overflow-x: hidden; */

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
	max-width: 125rem;
	margin: 0 auto 0;
	/* border: 1px solid blue; */
	/* justify-items: center; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: minmax(44.5rem, 1fr) 1fr;
			justify-items: unset;
		}
	}
`

const Col = styled(motion.div)`
	/* border: 1px solid red; */

	&:nth-child(1) {
		margin-top: 2rem;
		/* justify-self: center; */

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			margin-left: 4rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					margin-top: 6rem;
					justify-self: unset;
					margin-left: unset;
				}
			}
		}
	}

	&:nth-child(2) {
		/* border: 1px solid green; */
		justify-self: center;
		align-self: center;
		grid-row: 1 / 3;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				justify-self: unset;
				grid-row: unset;
			}
		}
	}
`

const Title = styled(motion.h1)`
	font-size: 5rem;
	line-height: 1.2;
	color: ${({ theme }) => theme.fonts.primary};

	span {
		display: block;
	}
`
const Description = styled(motion.p)`
	max-width: 43.8rem;
	color: ${({ theme }) => theme.fonts.secondary};
`

const ButtonsContainer = styled(motion.div)`
	display: grid;
	grid-template-columns: 1fr;
	margin-top: 2rem;
	margin-bottom: 2rem;
	gap: 1.5rem;
	max-width: 45rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr 1fr;
	}
`

const HeroFigure = styled(motion.figure)`
	max-width: 60rem;
	width: 100%;
	max-height: 100rem;
	/* height: 100%; */
`

const FoundersContainer = styled(motion.div)`
	/* margin-bottom: 1rem; */

	p {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		color: #cacaca;
	}
`
