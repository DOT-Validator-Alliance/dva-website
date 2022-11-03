// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Components
import Image from "../image/image.component"
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
			staggerChildren: 0.2,
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
		y: -100,
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

const DescriptionVariants: Variants = {
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

const ListItemVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.5, 0, 0.56, 0.99],
			transition: (i: number) => ({
				delay: 1 + i * 0.2,
				duration: 0.7,
				ease: [0.5, 0, 0.56, 0.99],
			}),
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

const AboutSection: React.FC<IProps> = ({ enableAnimation }) => {
	const items = [
		{
			image: {
				src: "/assets/about-section/polkadotters.png",
				alt: "polkadotters",
			},
			title: "Polkadotters",
			description:
				"Hi, I am Petr and I started the Polkadotters community with my colleague Pavel. We are from Czechia, a small country in the heart of Europe. We are really pleased to be a part of this initiative because we believe that the community should be the one with power over the network!",
		},
		// {
		// 	image: {
		// 		src: "/assets/about-section/promoteam.png",
		// 		alt: "promoteam",
		// 	},
		// 	title: "PromoTeam",
		// 	description:
		// 		"At PromoTeam we believe that validation is a philosophical contribution. Acting as your voice in the network and means of collaborating with the community. We believe that the validation role goes beyond just producing blocks and have constant uptime.",
		// },
		// {
		// 	image: {
		// 		src: "/assets/about-section/repe.png",
		// 		alt: "repe",
		// 	},
		// 	title: "Repe",
		// 	description: `As a developer, I often like to look "under the hood". Polkadot is said to be a bet against blockchain maximalism, that’s why we united independent community-led initiatives around the world under one Alliance, so let’s jump on this exciting journey together!`,
		// },
		{
			image: {
				src: "/assets/hero-section/founders/pathrock.jpeg",
				alt: "pathrock",
			},
			title: "Pathrocknetwork",
			description:
				"Hey, I’m Patrick from Germany and I’m representing pathrocknetwork and MillenniumClub or MCLB. We are running several validators for different projects and protocols and I am so happy to be able to join the alliance of like-minded validators where we share similar goals and values.",
		},
		{
			image: {
				src: "/assets/about-section/bld.png",
				alt: "bld",
			},
			title: "bLd Nodes",
			description:
				"I’m bLd from France. Little last one, I started my journey with a few geek friends a few months ago, we created bLd Nodes for our first validator node on Kusama. With our experience in sysadmin and blockchain development, we aim to provide a secure and reliable service for our validator nodes.",
		},
		{
			image: {
				src: "/assets/about-section/stakenode.png",
				alt: "stakenode",
			},
			title: "Stakenode",
			description: `As a developer, I often like to look "under the hood". Polkadot is said to be a bet against blockchain maximalism, that’s why we united independent community-led initiatives around the world under one Alliance, so let’s jump on this exciting journey together!`,
		},
		{
			image: {
				src: "/assets/hero-section/founders/founder-1.png",
				alt: "crifferent",
			},
			title: "Crifferent",
			description:
				"Hi, I am Petr and I started the Polkadotters community with my colleague Pavel. We are from Czechia, a small country in the heart of Europe. We are really pleased to be a part of this initiative because we believe that the community should be the one with power over the network!",
		},
		// {
		// 	image: {
		// 		src: "/assets/about-section/iceberg.png",
		// 		alt: "iceberg",
		// 	},
		// 	title: "Iceberg Nodes",
		// 	description:
		// 		"At PromoTeam we believe that validation is a philosophical contribution. Acting as your voice in the network and means of collaborating with the community. We believe that the validation role goes beyond just producing blocks and have constant uptime.",
		// },
		// {
		// 	image: {
		// 		src: "",
		// 		alt: "",
		// 	},
		// 	title: "",
		// 	description: "",
		// 	empty: true,
		// },
	]

	return (
		<AboutSectionContainer
			id="about"
			variants={variants}
			initial={"hidden"}
			whileInView={"visible"}
			exit={"hidden"}
			viewport={{ once: true }}
		>
			<LeftTopBlurFigure
				variants={enableAnimation ? BlopVariants : mobileVariants}
			>
				<Image
					src="/assets/blops/home_pink.png"
					alt="bottom blur"
					effect="blur"
					width={"100%"}
					height={"100%"}
					style={{ objectFit: "contain" }}
				/>
			</LeftTopBlurFigure>
			<LeftBottomBlurFigure
				variants={enableAnimation ? BlopVariants : mobileVariants}
			>
				<Image
					src="/assets/blops/home_pink.png"
					alt="bottom blur"
					effect="blur"
					width={"100%"}
					height={"100%"}
					style={{ objectFit: "contain" }}
				/>
			</LeftBottomBlurFigure>
			<RightBlurFigure
				variants={enableAnimation ? BlopVariants : mobileVariants}
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
			<CenterBlurFigure
				variants={enableAnimation ? BlopVariants : mobileVariants}
			>
				{/* <Image
					src="/assets/blops/home_purple.png"
					alt="right blur"
					effect="blur"
					width={"100%"}
					height={"100%"}
					style={{ objectFit: "contain" }}
				/> */}
			</CenterBlurFigure>

			<Container>
				<HeadContainer>
					<Title variants={enableAnimation ? ItemVariants : mobileVariants}>
						About us
					</Title>
					<Border
						variants={enableAnimation ? BorderVariants : mobileVariants}
					/>
					<Description
						variants={enableAnimation ? DescriptionVariants : mobileVariants}
					>
						We aim to unite the biggest and most prominent Polkadot communities
						in order to support their healthy growth and the decentralization of
						the network.
					</Description>
				</HeadContainer>
				<ItemsDirectory>
					{items.map((item, index) => (
						<Item
							key={index}
							custom={index}
							variants={enableAnimation ? ListItemVariants : mobileVariants}
							// empty={!!item.empty}
						>
							<ItemHead>
								<ImageFigure>
									<Image
										src={item.image.src}
										alt={item.image.alt}
										width={"100%"}
										height={"100%"}
										effect={"blur"}
										// style={{ objectFit: "cover" }}
									/>
								</ImageFigure>
								<ItemTitle>{item.title}</ItemTitle>
							</ItemHead>
							<ItemDescription>{item.description}</ItemDescription>
						</Item>
					))}
				</ItemsDirectory>
			</Container>
		</AboutSectionContainer>
	)
}

export default AboutSection

const LeftTopBlurFigure = styled(motion.figure)`
	position: absolute;
	z-index: -1;
	width: 100rem;
	height: 100rem;
	top: -30rem;
	left: -45rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 175rem;
		height: 175rem;
		top: -60rem;
		left: -75rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			bottom: unset;
			top: -60rem;
			left: -75rem;
		}
	}
`

const LeftBottomBlurFigure = styled(motion.figure)`
	display: none;
	visibility: hidden;
	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: block;
		visibility: visible;
		position: absolute;
		border-radius: 50%;
		width: 89.3rem;
		height: 89.3rem;
		z-index: -1;
		bottom: -50rem;
		left: -48rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const RightBlurFigure = styled(motion.figure)`
	position: absolute;
	border-radius: 50%;
	width: 50.8rem;
	height: 50.8rem;

	z-index: -1;
	top: 100rem;
	right: -20rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 162.8rem;
		height: 162.8rem;
		top: 40rem;
		right: -100rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			top: -20rem;
			right: -100rem;

			/* bottom: unset;
			top: -60rem;
			right: -140rem; */
		}
	}
`

const CenterBlurFigure = styled(motion.figure)`
	position: absolute;
	border-radius: 50%;
	width: 1628px;
	height: 1628px;

	background: radial-gradient(
		50% 50% at 50% 50%,
		rgba(154, 38, 141, 0.22) 0%,
		rgba(0, 0, 0, 0) 100%
	);
	z-index: -1;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const AboutSectionContainer = styled(motion.section)`
	scroll-margin-top: 10rem;
	position: relative;
	padding: 0 2rem;
`

const Container = styled.section`
	max-width: 125rem;
	margin: 15rem auto 0;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 20rem auto 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: 1fr 1fr;
		}
	}
`

const HeadContainer = styled.div`
	max-width: 43.9rem;
	margin-bottom: 6rem;
`

const Title = styled(motion.h2)`
	font-size: 4rem;
	color: ${({ theme }) => theme.fonts.primary};
`

const Description = styled(motion.p)`
	color: ${({ theme }) => theme.fonts.secondary};
`

const ItemsDirectory = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	gap: 3rem;
	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr 1fr;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
`

interface IItemProps {
	empty?: boolean
}

const Item = styled(motion.div)<IItemProps>`
	/* border: 1px solid green; */
	position: relative;
	width: 100%;
	/* max-width: 35rem; */
	padding: 2rem;
	color: ${({ theme }) => theme.aboutSection.itemColor};
	overflow: hidden;
	display: ${({ empty }) => (empty ? "none" : "block")};
	visibility: ${({ empty }) => (empty ? "hidden" : "visible")};

	:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${({ theme }) => theme.aboutSection.itemBackgroundColor};
		filter: blur(1rem);
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			display: block;
		}
	}
`

const ItemHead = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	margin-bottom: 1.5rem;
`

const ImageFigure = styled.figure`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
	overflow: hidden;
`

const ItemTitle = styled.h3``

const ItemDescription = styled.p`
	font-family: "Nunito Sans", sans-serif;
`
