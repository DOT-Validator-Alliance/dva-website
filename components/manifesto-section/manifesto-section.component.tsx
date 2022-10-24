// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Components
import Border from "../border/border.component"
import Image from "../image/image.component"

// Types
export interface IProps {
	enableAnimation: boolean
}

const ManifestoSection: React.FC<IProps> = ({ enableAnimation }) => {
	const TITLE = "Manifesto"
	const DESCRIPTION =
		"We decided to formulate our basic goals and commitments in the form of a manifesto - a document that should resonate with every DAOist and which should feel natural to every validator who is here not (only) for a business but also for the sake of the success of the entire Dotsama ecosystem."

	const items = [
		{
			content:
				"We believe in a decentralized, community-led society and want the DotSama ecosystem to unite.",
		},
		{
			content:
				"We believe that validators shouldn’t be passionate about the profit only but also about help and support of the projects they validate and collate on - and not only that, they should be passionate about the success of the new crypto economy itself.",
		},
		{
			content:
				"Validation is a service to the network and it is always connected with the support of our communities and nominators/delegators.",
		},
		{
			content:
				"We all know the value of protocol governance and validators should be the ones encouraging it the most.",
		},
		{
			content:
				"We play this game for the long term so we act accordingly. Short-term profit should never outweigh the long-term benefits. ",
		},
		{
			content:
				"No single individual/entity should represent more than 5% of a given network. Parachain sets are rather small and we strive for the biggest decentralization possible!",
		},
		{
			content:
				"Our DAO will always be transparent and open to anyone with the same values",
		},
	]

	const variants: Variants = {
		hidden: {
			opacity: 0,
			// y: 100,
		},
		visible: {
			opacity: 1,
			// y: 0,
			transition: {
				// delay: 0.5,
				delayChildren: 0.4,
				staggerChildren: 0.2,
				ease: [0.5, 0, 0.56, 0.99],
			},
		},
	}

	// const directoryVariants: Variants = {
	// 	hidden: {
	// 		opacity: 0,
	// 		// y: 100,
	// 	},
	// 	visible: {
	// 		opacity: 1,
	// 		// y: 0,
	// 		transition: {
	// 			// duration: 1,
	// 			// delay: 1,
	// 			// delayChildren: 1,
	// 			// staggerChildren: 0.2,
	// 			// ease: [0.5, 0, 0.56, 0.99],
	// 		},
	// 	},
	// }

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
			x: 100,
		},
		visible: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
				// delay: i * 0.3,
				ease: [0.5, 0, 0.56, 0.99],
			},
		}),
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

	const BorderVariants: Variants = {
		hidden: {
			opacity: 0,
			x: 100,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
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

	return (
		<>
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
			{/* <CenterBlurFigure
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
			</CenterBlurFigure> */}
			<Container
				variants={variants}
				initial="hidden"
				animate="visible"
				exit="hidden"
			>
				<Title variants={enableAnimation ? ItemVariants : mobileVariants}>
					{TITLE}
				</Title>
				<Border variants={enableAnimation ? BorderVariants : mobileVariants} />
				<Description
					variants={enableAnimation ? DescriptionVariants : mobileVariants}
				>
					{DESCRIPTION}
				</Description>

				<Directory
				// variants={directoryVariants}
				// initial="hidden"
				// animate="visible"
				// exit="hidden"
				>
					{items.map((item, index) => (
						<Item
							key={index}
							custom={index}
							variants={enableAnimation ? ItemVariants : mobileVariants}
							// initial="hidden"
							// whileInView="visible"
							// exit="hidden"
						>
							<ItemNumberContainer>
								<p>0{index + 1}</p>
							</ItemNumberContainer>
							<ItemContent>
								<p>{item.content}</p>
							</ItemContent>
						</Item>
					))}
				</Directory>
			</Container>
			{/* <LeftBlurFigure
				variants={enableAnimation ? BlopVariants : mobileVariants}
				initial="hidden"
				animate="visible"
				exit="hidden"
			>
				<Image
					src="/assets/manifesto/bottom-left-ilu.png"
					alt="bottom blur"
					effect="blur"
					width={"100%"}
					height={"100%"}
					style={{ objectFit: "contain" }}
				/>
			</LeftBlurFigure> */}
		</>
	)
}

export default ManifestoSection

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
			top: -90rem;
			left: -75rem;
		}
	}
`

const LeftBottomBlurFigure = styled(motion.figure)`
	position: absolute;
	width: 89.3rem;
	height: 89.3rem;
	z-index: -1;
	bottom: 0rem;
	left: -48rem;
	/* display: none; */
	/* visibility: hidden; */
	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		/* display: block; */
		/* visibility: visible; */
		/* position: absolute; */
		/* border-radius: 50%; */
		width: 89.3rem;
		height: 89.3rem;
		z-index: -1;
		bottom: -15rem;
		left: -48rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const RightBlurFigure = styled(motion.figure)`
	position: absolute;
	border-radius: 50%;
	width: 80.8rem;
	height: 80.8rem;

	z-index: -1;
	top: 20rem;
	right: -45rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 162.8rem;
		height: 162.8rem;
		top: -10rem;
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
const Container = styled(motion.div)`
	max-width: 68.3rem;
	margin: 0 auto;
	padding: 6rem 2rem;
`

const Title = styled(motion.h2)`
	font-size: 4rem;
	font-weight: 600;
	color: ${({ theme }) => theme.fonts.primary};
`

const Description = styled(motion.p)`
	/* max-width: 43.8rem; */
	color: ${({ theme }) => theme.fonts.secondary};
	margin-bottom: 5.5rem;
`

const Directory = styled(motion.div)`
	display: flex;
	flex-direction: column;
	gap: 1.3rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		gap: 1rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Item = styled(motion.div)`
	display: grid;
	background: ${({ theme }) => theme.manifesto.itemBackgroundColor};
	grid-template-columns: 9rem 1fr;
	backdrop-filter: blur(10px);
	padding: 1.2rem 0;
`

// const ItemBorder = styled(motion.div)`
// 	width: 10px;
// 	height: 100%;
// `

const ItemNumberContainer = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: "Space Grotesk";
	font-size: 4rem;
	fint-weight: 600;
	border-right: 1px solid ${({ theme }) => theme.manifesto.borderColor};
`

const ItemContent = styled(motion.div)`
	display: flex;
	align-items: center;
	padding: 0 1.8rem;

	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: ${({ theme }) => theme.manifesto.itemColor};
`
