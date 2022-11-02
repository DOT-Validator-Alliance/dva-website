// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Components
import Image from "../image/image.component"
import FlexContainer from "../flex-container/flex-container.component"
import Button from "../button/button.component"
import ButtonLink from "../button-link/button-link.component"
import Border from "../border/border.component"

// Types
export interface IProps {
	enableAnimation: boolean
}

const variants: Variants = {
	hidden: {
		opacity: 0,
		// y: 100,
	},
	visible: {
		opacity: 1,
		// y: 0,
		transition: {
			// duration: 1,
			// delay: 0.5,
			staggerChildren: 0.4,
			ease: [0.5, 0, 0.56, 0.99],
		},
	},
}

const mobileVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
			// delay: 0.2,
			ease: [0.5, 0, 0.56, 0.99],
		},
	},
}

const ItemVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.5,
			// ease: [0.5, 0, 0.56, 0.99],
		},
	},
}

const ItemVariants2: Variants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: [0.5, 0, 0.56, 0.99],
		},
	},
}

const BlopVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
			delay: 0.5,
			ease: [0.5, 0, 0.56, 0.99],
		},
	},
}

const BorderVariants: Variants = {
	hidden: {
		opacity: 0,
		x: 100,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			ease: [0.5, 0, 0.56, 0.99],
		},
	},
}

const HeroSection: React.FC<IProps> = ({ enableAnimation }) => {
	const founders = [
		{
			url: "https://twitter.com/dev0_sik",
			image: {
				src: "/assets/hero-section/founders/founder-1.png",
				alt: "dev0_sik",
			},
		},
		// {
		// 	url: "",
		// 	image: {
		// 		src: "/assets/hero-section/founders/founder-2.png",
		// 		alt: "Logo",
		// 	},
		// },
		{
			url: "https://twitter.com/pathrock2",
			image: {
				src: "/assets/hero-section/founders/pathrock.jpeg",
				alt: "pathrock2",
			},
		},
		{
			url: "https://twitter.com/stakenode_dev",
			image: {
				src: "/assets/hero-section/founders/jimmy-tudeski.jpeg",
				alt: "stakenode_dev",
			},
		},
		{
			url: "https://twitter.com/bldnodes",
			image: {
				src: "/assets/hero-section/founders/founder-5.png",
				alt: "bldnodes",
			},
		},
		// {
		// 	url: "",
		// 	image: {
		// 		src: "/assets/hero-section/founders/founder-6.png",
		// 		alt: "Logo",
		// 	},
		// },
		{
			url: "https://twitter.com/polkadotters1",
			image: {
				src: "/assets/hero-section/founders/founder-7.png",
				alt: "polkadotters1",
			},
		},
	]

	return (
		<SectionContainer>
			<Row>
				<Col
					variants={variants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<Title variants={enableAnimation ? ItemVariants : mobileVariants}>
						<span>DOT Validator</span>
						<span>Alliance</span>
					</Title>
					<Border
						variants={enableAnimation ? BorderVariants : mobileVariants}
					/>
					<Description
						variants={enableAnimation ? ItemVariants : mobileVariants}
					>
						We are a group of community leaders who decided to dedicate their
						professional lives to the Polkadot and its diverse ecosystem.
					</Description>

					<ButtonsContainer
						variants={enableAnimation ? ItemVariants2 : mobileVariants}
					>
						<ButtonLink href={"/#validators"}>Support us</ButtonLink>
						<ButtonLink href={"/manifesto"} outline>
							Read our Manifesto
						</ButtonLink>
					</ButtonsContainer>

					<FoundersContainer
						variants={enableAnimation ? ItemVariants2 : mobileVariants}
					>
						<p>Founded by:</p>
						<FlexContainer gap="1.5rem" justifyContent="start" wrap="wrap">
							{founders.map((founder, index) => (
								<a
									key={index}
									href={founder.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src={founder.image.src}
										alt={founder.image.alt}
										width={35}
										height={35}
										style={{ borderRadius: "50%" }}
									/>
								</a>
							))}
						</FlexContainer>
					</FoundersContainer>
				</Col>
				<Col
					variants={enableAnimation ? BlopVariants : mobileVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<HeroFigure
						// initial={{ y: 0 }}
						whileInView={
							enableAnimation
								? { y: [0, -15, 0], scale: [1, 0.97, 1] }
								: mobileVariants
						}
						transition={
							enableAnimation
								? {
										duration: 4,
										repeat: Infinity,
										delay: 5,
										// ease: [0.64, 0.33, 0.64, 0.86],
								  }
								: mobileVariants
						}
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
					variants={enableAnimation ? BlopVariants : mobileVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
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
					variants={enableAnimation ? BlopVariants : mobileVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
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

const Row = styled(motion.div)`
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
	max-width: 48rem;

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
		margin-bottom: 1rem;
		color: #cacaca;
	}
`
