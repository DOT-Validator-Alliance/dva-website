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
				"Hi, I am Petr and I started the Polkadotters community with my colleague Pavel. We are bloggers, community builders, crypto event organizers and also one of the biggest collators in Dotsama ecosystem! We are really pleased to be a part of this initiative because we believe that community should participate in every aspect of blockchain development, including running the validators.",
			person: {
				image: {
					src: "/assets/flags/czech.png",
					alt: "czech",
				},
				name: "Petr",
				description:
					"Polkadot, Astar and Bifrost ambassador, Czech/</br>Slovak Polkadot community founder",
			},
		},
		{
			image: {
				src: "/assets/about-section/stakenode.png",
				alt: "stakenode",
			},
			title: "Stakenode",
			description: `Stakenode is a gateway to the Polkadot economy. We deliver all possible options for Proof-of-Stake tokens in the Polkadot ecosystem. We provide Validator Services to all POS Polkadot projects bringing you the possibility to stake Your tokens like $DOT $KSM $FIS $PCX with other network`,
			person: {
				image: {
					src: "/assets/flags/poland.png",
					alt: "poland",
				},
				name: "Jimmy",
				description:
					"Polkadot Ambasador, HydraDX Council Member,</br> Pol(s)kadot - Polish Polkadot Community Founder",
			},
		},
		{
			image: {
				src: "/assets/about-section/pathrock.png",
				alt: "pathrock",
			},
			title: "Pathrocknetwork",
			description:
				"Hey, I am Patrick from Germany the founder of pathrocknetwork, a community oriented staking as a service provider for a variety of different blockchain projects. I am so happy to be able to join the alliance of like-minded validators where we share similar goals and values.",
			person: {
				image: {
					src: "/assets/flags/germany.png",
					alt: "germany",
				},
				name: "Patrick",
				description:
					"Polkadot, Astar and Bifrost ambassador, Czech/</br>Slovak Polkadot community founder",
			},
		},
		{
			image: {
				src: "/assets/about-section/bld.png",
				alt: "bld",
			},
			title: "bLd Nodes",
			description:
				"Recently rebranded to ChadStakeKing (because why not), I am DevOps engineer for Astar and Logion network. I am passionate about decentralization, community and any kind of technical topics. Validation is my favorite hobby, I pick carefully only a few chains to operate on.",
			person: {
				image: {
					src: "/assets/flags/france.png",
					alt: "france",
				},
				name: "ChadStakeKinG",
				description:
					"Astar & Logion devops engineer, Polkadot</br> Francophonie, ParisDotComm, Chaos DAO",
			},
		},
		{
			image: {
				src: "/assets/about-section/crifferent.png",
				alt: "crifferent",
			},
			title: "Crifferent.de",
			description:
				"Sik is a true Web3 native. Working for a blockchain company full-time, core member of HydraDX, councilor/registrar/moderator/ambassador in many DotSama projects and also running safe and reliable self-hosted validators and collators at crifferent.de.",
			person: {
				image: {
					src: "/assets/flags/germany.png",
					alt: "germany",
				},
				name: "Sik",
				description:
					"Staking Facilities and HydraDX/Basilisk core member / Moonbeam Treasury Council / HydraDX Registrar / HydraDX & Basilisk Councilor / Polkadot Ambassador / Moonbeam Moderator & Ambassador / Interlay Tech Team Lead Ambassador",
			},
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
		{
			image: {
				src: "/assets/about-section/curu.png",
				alt: "curu",
			},
			title: "Curu",
			description:
				"Hey, I'm a small indipendent validator/collator from Czechia with some 2 years of experience in the DotSama space. I like the idea of web3 and want to contribute to the vision of making the world more fair and decentralized.",
			person: {
				image: {
					src: "/assets/flags/czech.png",
					alt: "czech",
				},
				name: "Curu",
				description: "Sora Ambassador, Polkadot ecosystem content creator",
			},
			// empty: true,
		},
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
							<PersonContainer>
								<FlagFigure>
									<Image
										src={item.person.image.src}
										alt={item.person.image.alt}
										width={"100%"}
										height={"100%"}
										effect={"blur"}
										style={{ objectFit: "contain" }}
									/>
								</FlagFigure>
								<PersonName>{item.person.name}</PersonName>
								<PersonDescription
									dangerouslySetInnerHTML={{ __html: item.person.description }}
								/>
							</PersonContainer>
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
			gap: 6rem;

			/* grid-template-columns: 1fr 1fr 1fr; */
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
	display: flex;
	flex-direction: column;

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
	margin-bottom: 3rem;
	flex-grow: 1;
`

const PersonContainer = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	gap: 1rem;
`

const FlagFigure = styled.figure`
	width: 1.5rem;
	/* height: 1.5rem; */
`

const PersonName = styled.h3`
	font-weight: 600;
	font-size: 1.5rem;
	line-height: 1;

	color: #ffffff;
`

const PersonDescription = styled.p`
	grid-column: 1 / 3;

	font-weight: 600;
	font-size: 1rem;
	line-height: 98.6%;

	color: #cacaca;
`
