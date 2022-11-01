// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Components
import Image from "../image/image.component"
// import Button from "../button/button.component"
import Link from "../link/link.component"
import Border from "../border/border.component"

// Hooks
// import { useEffectOnce } from "usehooks-ts"
// import { useState, useEffect } from "react"

// Types
import {
	IValidator,
	// IValidatorItem
} from "../../types/validator.types"
export interface IProps {
	data: IValidator
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

const mobileListItemVariants: Variants = {
	hidden: {
		x: 100,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: [0.5, 0, 0.56, 0.99],
			// transition: (i: number) => ({
			// 	delay: 1 + i * 0.2,
			// 	duration: 0.7,
			// 	ease: [0.5, 0, 0.56, 0.99],
			// }),
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
		x: 100,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.7,
			ease: [0.5, 0, 0.56, 0.99],
			// transition: (i: number) => ({
			// 	delay: 1 + i * 0.2,
			// 	duration: 0.7,
			// 	ease: [0.5, 0, 0.56, 0.99],
			// }),
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

const ValidatorSection: React.FC<IProps> = ({ data, enableAnimation }) => {
	return (
		<ValidatorContainer
			id={data.containerID}
			variants={variants}
			initial={"hidden"}
			whileInView={"visible"}
			exit={"hidden"}
			viewport={{ once: true }}
		>
			<Col variants={enableAnimation ? BlopVariants : mobileVariants}>
				<BlurFigure variants={enableAnimation ? BlopVariants : mobileVariants}>
					<Image
						src={data.blop.src}
						alt={data.blop.alt}
						effect="blur"
						width={"100%"}
						height={"100%"}
						style={{ objectFit: "contain" }}
					/>
				</BlurFigure>
				<IluFigure
					whileInView={
						enableAnimation
							? { y: [0, -15, 0], scale: [1, 0.97, 1] }
							: undefined
					}
					transition={
						enableAnimation
							? {
									duration: 4,
									repeat: Infinity,
									// ease: [0.64, 0.33, 0.64, 0.86],
							  }
							: undefined
					}
				>
					<Image
						src={data.image.src}
						alt={data.image.alt}
						width={"100%"}
						height={"100%"}
						effect="blur"
						style={{ objectFit: "contain" }}
					/>
				</IluFigure>
			</Col>
			<Col>
				<Title variants={enableAnimation ? ItemVariants : mobileVariants}>
					{data.title}
				</Title>
				<Border variants={enableAnimation ? BorderVariants : mobileVariants} />
				<Description
					variants={enableAnimation ? DescriptionVariants : mobileVariants}
				>
					{data.description}
				</Description>

				{/* <ValidatorsContainer>
					<ValidatorsLabel
						variants={enableAnimation ? DescriptionVariants : mobileVariants}
					>
						{data.listLabel}
					</ValidatorsLabel>
					<ValidatorsList>
						{data.validators.map((validator, index) => (
							<Validator
								custom={index}
								key={index}
								variants={
									enableAnimation ? ListItemVariants : mobileListItemVariants
								}
							>
								<h3>{validator.name}</h3>
								<p>{validator.address}</p>
							</Validator>
						))}
					</ValidatorsList>
				</ValidatorsContainer> */}

				{/* <Button>{data.cta.label}</Button> */}
				<Link
					href={data.link.slug}
					variants={enableAnimation ? DescriptionVariants : mobileVariants}
				>
					{data.link.label}
				</Link>
			</Col>
		</ValidatorContainer>
	)
}

export default ValidatorSection

const ValidatorContainer = styled(motion.div)`
	position: relative;
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: 1fr;
	padding: 0 2rem;
	max-width: 125rem;
	margin: 20rem auto 0;
	/* border: 1px solid blue; */
	/* justify-items: center; */
	align-items: center;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 2rem;
		margin: 15rem auto 0;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: minmax(44.5rem, 1fr) 1fr;
			grid-gap: 10rem;
			justify-items: unset;
			padding: 0 0;
		}
	}
`

const Col = styled(motion.div)`
	/* border: 1px solid green; */

	&:nth-child(2) {
		/* margin-top: 2rem; */
		/* justify-self: center; */

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			margin-left: 4rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					margin-left: unset;
					/* margin-top: 6rem; */
				}
			}
		}
	}

	&:nth-child(1) {
		position: relative;
		/* justify-self: center; */
		/* align-self: center; */
		/* grid-row: 1 / 3; */

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			/* margin-left: 4rem; */
			@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					/* margin-top: 6rem; */
				}
			}
		}
	}
`

const BlurFigure = styled(motion.figure)`
	position: absolute;
	border-radius: 50%;
	width: 75rem;
	height: 75rem;
	z-index: -1;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* bottom: -30rem;
	left: -38rem; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			/* bottom: unset;
			top: -24rem;
			left: -38rem; */
		}
	}
`

const IluFigure = styled(motion.figure)`
	max-width: 40rem;
	margin: 0 auto;
	width: 100%;
	max-height: 100rem;
	height: 100%;
`

const Title = styled(motion.h2)`
	font-size: 4rem;
	font-weight: 600;
	color: ${({ theme }) => theme.fonts.primary};
`

const Description = styled(motion.p)`
	max-width: 43.8rem;
	color: ${({ theme }) => theme.fonts.secondary};
`

const ValidatorsContainer = styled(motion.div)`
	margin-top: 2rem;
`

const ValidatorsLabel = styled(motion.p)`
	color: ${({ theme }) => theme.validatorSection.labelColor};
	font-size: 1.2rem;
	margin-bottom: 1rem;
`

const ValidatorsList = styled(motion.ul)`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-bottom: 2rem;
`

const Validator = styled(motion.li)`
	padding: 1.5rem 2rem;
	backdrop-filter: blur(10px);
	background: ${({ theme }) => theme.validatorSection.listItemBackgroundColor};

	h3 {
		font-size: 1.6rem;
		color: ${({ theme }) => theme.validatorSection.listItemTitleColor};
	}

	p {
		font-size: 1.6rem;
		color: ${({ theme }) => theme.validatorSection.listItemAddressColor};
		line-break: anywhere;
	}
`

const CtaLink = styled(motion.a)`
	display: inline-flex;
	align-items: center;
	gap: 1rem;
	font-size: 1.6rem;
	font-weight: 600;
	background: ${({ theme }) => theme.validatorSection.linkColor};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

const IconSpan = styled.span`
	/* position: absolute;
	right: -1rem;
	top: 50%;
	transform: translateY(-50%); */

	display: flex;
	align-items: center;
	justify-content: center;
	/* opacity: 0; */
	transition: all 0.4s ease-out;

	color: ${({ theme }) => theme.colors.primary};
`
