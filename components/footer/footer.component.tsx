// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Components
import Image from "../image/image.component"
import Link from "next/link"

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

const Footer: React.FC = () => {
	const navItems = [
		{
			label: "Validators",
			slug: "/#validators",
		},
		{
			label: "Manifesto",
			slug: "/",
		},
		{
			label: "How to nominate",
			slug: "/",
		},
	]

	const socialItems = [
		{
			slug: "https://t.me/DotValidators",
			label: "Telegram",
		},
		{
			slug: "https://discord.com/invite/Kwfbe6YRAd",
			label: "Discord",
		},
		{
			slug: "https://discord.com/invite/Kwfbe6YRAd",
			label: "Discord",
			empty: true,
		},
	]

	return (
		<FooterContainer>
			<Row variants={variants} initial="hidden" animate="visible" exit="hidden">
				<Col>
					<HeroFigure
						// initial={{ y: 0 }}
						whileInView={
							// isMd ? { y: [0, -15, 0], scale: [1, 0.97, 1] } : undefined
							{ y: [0, -15, 0], scale: [1, 0.97, 1] }
						}
						transition={{
							duration: 4,
							repeat: Infinity,
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
				<Col variants={BlopVariants}>
					<ColItem>
						<Title>Navigation</Title>
						<NavList>
							{navItems.map((item, index) => (
								<NavItem key={index}>
									<Link href={item.slug}>
										<LabelA>
											<LabelSpan>{item.label}</LabelSpan>
											<IconSpan>
												<Image
													src="/assets/icons/right-arrow.svg"
													alt="Right Arrow"
												/>
											</IconSpan>
										</LabelA>
									</Link>
								</NavItem>
							))}
						</NavList>
					</ColItem>
					<ColItem>
						<Title>Community</Title>
						<NavList>
							{socialItems.map((item, index) => (
								<NavItem key={index} empty={!!item.empty}>
									<LabelA href={item.slug}>
										<LabelSpan>{item.label}</LabelSpan>
										<IconSpan>
											<Image
												src="/assets/icons/right-arrow.svg"
												alt="Right Arrow"
											/>
										</IconSpan>
									</LabelA>
								</NavItem>
							))}
						</NavList>
					</ColItem>
				</Col>
			</Row>
		</FooterContainer>
	)
}

export default Footer

const FooterContainer = styled.footer`
	margin-top: 15rem;
	border-top: 1px solid ${({ theme }) => theme.footer.borderColor};
	background-color: ${({ theme }) => theme.footer.backgroundColor};
	padding: 0 2rem 4rem;
`

const Row = styled(motion.div)`
	position: relative;
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: 1fr;
	max-width: 125rem;
	margin: -4rem auto 0;
	/* border: 1px solid blue; */
	/* justify-items: center; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: 2fr 1fr;
			justify-items: unset;
		}
	}
`

const Col = styled(motion.div)`
	&:nth-child(1) {
		justify-self: center;
		/* border: 1px solid red; */

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					justify-self: unset;
				}
			}
		}
	}

	&:nth-child(2) {
		/* border: 1px solid green; */
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
		gap: 2rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const ColItem = styled(motion.div)`
	margin-top: 4rem;
`

const Title = styled(motion.h3)`
	margin-bottom: 3rem;
	color: ${({ theme }) => theme.footer.titleColor};
`

const HeroFigure = styled(motion.figure)`
	max-width: 60rem;
	width: 100%;
	max-height: 100rem;
	/* height: 100%; */
`

const NavList = styled.ul`
	display: flex;
	gap: 2rem;
	justify-content: start;
	flex-direction: column;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const LabelSpan = styled.span`
	position: relative;
	transition: all 0.3s ease-out;
`

const IconSpan = styled.span`
	position: absolute;
	right: -1rem;
	top: 50%;
	transform: translateY(-50%);

	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: all 0.3s ease-out;
`

const LabelA = styled.a`
	position: relative;

	gap: 0.5rem;
	font-weight: 400;

	color: ${({ theme }) => theme.footer.navItemColor};

	transition: all 0.3s ease-out;

	&:hover {
		color: ${({ theme }) => theme.footer.activeNavItemColor};
		font-weight: 600;

		${IconSpan} {
			opacity: 1;
		}

		${LabelSpan} {
			margin-left: -1rem;
			margin-right: 1rem;
		}
	}
`

interface INavItem {
	empty?: boolean
}

const NavItem = styled.li<INavItem>`
	visibility: ${({ empty }) => (empty ? "hidden" : "visible")};
	display: flex;
	justify-content: start;
	align-items: start;
	flex-direction: column;
`
