// Utils
import styled, { css } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Components
import Image from "../image/image.component"
import FlexContainer from "../flex-container/flex-container.component"
import HamMenuButton from "../ham-menu-button/ham-menu-button.component"
import Link from "next/link"

// Hooks
import { useBoolean } from "usehooks-ts"

// Icons
// import { AiOutlineRight } from "react-icons/ai"

const Header: React.FC = () => {
	const { value: isMenuOpen, toggle: toggleMenu } = useBoolean(false)

	const navItems = [
		{
			label: "Validators",
			slug: "/#validators",
		},
		{
			label: "Manifesto",
			slug: "/manifesto",
		},
		{
			label: "Networks",
			slug: "/#validators",
			disabled: false,
		},
	]

	const socialItems = [
		{
			slug: "https://t.me/DotValidators",
			icon: {
				src: "/assets/icons/telegram-icon.svg",
				alt: "Telegram Logo",
				width: 20,
			},
		},
		{
			slug: "https://discord.com/invite/Kwfbe6YRAd",
			icon: {
				src: "/assets/icons/discord-icon.svg",
				alt: "Discord Logo",
				width: 15,
			},
		},
		{
			slug: "https://app.subsocial.network/10194",
			icon: {
				src: "/assets/icons/subsocial-gradient.svg",
				alt: "Subsocial Logo",
				width: 15,
			},
		},
	]

	const handleMobileItemClick = () => {
		toggleMenu()
	}

	return (
		<>
			<HeaderContainer>
				<Container>
					<FlexContainer
						alignItems="center"
						justifyContent="space-between"
						height="100%"
					>
						<Link href="/" passHref>
							<a>
								<LogoFigure>
									<Image
										src="/assets/aliancelogo-v5.svg"
										alt="Validator Alliance Logo"
										width={"100%"}
										height={"100%"}
										style={{ objectFit: "contain" }}
									/>
								</LogoFigure>
							</a>
						</Link>
						<Nav>
							<NavList>
								{navItems.map((item, index) => (
									<NavItem key={index}>
										<Link href={item.slug} scroll={true} passHref>
											<LabelA disabled={item?.disabled}>
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
						</Nav>

						<SocialsContainer>
							<SocialsList>
								{socialItems.map((item, index) => (
									<SocialsItem key={index}>
										<SocialsLink
											href={item.slug}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Image
												src={item.icon.src}
												alt={item.icon.alt}
												// width={item.icon.width}
												width={"100%"}
											/>
										</SocialsLink>
									</SocialsItem>
								))}
							</SocialsList>
							<HamMenuButton isOpen={isMenuOpen} onClick={() => toggleMenu()} />
						</SocialsContainer>
					</FlexContainer>
				</Container>
			</HeaderContainer>
			<AnimatePresence mode="wait">
				{isMenuOpen && (
					<MobileMenuContainer
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<BottomBlurFigure>
							<Image
								src="/assets/blops/pink.png"
								alt="bottom blur"
								effect="blur"
								width={"100%"}
								height={"100%"}
								style={{ objectFit: "contain" }}
							/>
						</BottomBlurFigure>
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
						<MobileList>
							{navItems.map((item, index) => (
								<MobileItem onClick={() => handleMobileItemClick()} key={index}>
									<Link href={item.slug}>
										<a>{item.label}</a>
									</Link>
								</MobileItem>
							))}
						</MobileList>
					</MobileMenuContainer>
				)}
			</AnimatePresence>
		</>
	)
}

export default Header

const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: ${({ theme }) => theme.header.backgroundColor};
	border-bottom: 1px solid ${({ theme }) => theme.header.borderColor};
	padding: 0 2rem;
	height: 10rem;
	z-index: 100;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Container = styled.div`
	width: 100%;
	height: 100%;
	max-width: 130rem;
	margin: 0 auto;
`

const LogoFigure = styled.figure`
	width: 10rem;

	@media all and (min-width: 350px) {
		width: 12rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			width: 15rem;
		}
	}
`

const Nav = styled.nav``

const NavList = styled.ul`
	display: none;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
		gap: 3.5rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const LabelSpan = styled.span`
	position: relative;
	transition: all 0.4s ease-out;
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
	transition: all 0.4s ease-out;
`

interface IAProps {
	disabled?: boolean
}

const LabelA = styled.a<IAProps>`
	position: relative;

	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-weight: 400;

	color: ${({ theme }) => theme.header.navItemColor};

	transition: all 0.4s ease-out;
	cursor: default;

	${({ disabled }) =>
		!disabled &&
		css`
			cursor: pointer;
			&:hover {
				color: ${({ theme }) => theme.header.activeNavItemColor};
				font-weight: 600;

				${IconSpan} {
					opacity: 1;
				}

				${LabelSpan} {
					margin-left: -1rem;
					margin-right: 1rem;
				}
			}
		`}
`

const NavItem = styled.li``

const SocialsContainer = styled.div`
	display: flex;
	gap: 1.5rem;
	align-items: center;

	/* @media all and (min-width: 350px) {
		gap: 3rem;
	} */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		gap: 3rem;
	}
`

const SocialsList = styled.ul`
	display: flex;
	gap: 1rem;
`

const SocialsItem = styled.li``

const SocialsLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid ${({ theme }) => theme.header.navItemColor};
	border-radius: 50%;
	padding: 1rem;
	width: 3.7rem;
	height: 3.7rem;
	transition: all 0.3s ease-out;

	&:hover {
		border: 1px solid ${({ theme }) => theme.header.activeNavItemColor};
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 1.3rem;
		width: 4.7rem;
		height: 4.7rem;
	}
`

const MobileMenuContainer = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.header.backgroundColor};
	z-index: 99;
	overflow: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
		visibility: hidden;
	}
`

const MobileList = styled.ul`
	position: relative;
	z-index: 1;
	margin-top: 10rem;
	height: calc(100% - 10rem);
	padding: 4rem 2rem;
	display: flex;
	flex-direction: column;
	gap: 4rem;
	align-items: center;
`

const MobileItem = styled.li`
	a {
		font-size: 3rem;
		font-weight: 400;
		color: ${({ theme }) => theme.header.navItemColor};
		transition: all 0.4s ease-out;

		&:hover {
			color: ${({ theme }) => theme.header.activeNavItemColor};
			font-weight: 600;
		}
	}
`

const BottomBlurFigure = styled.figure`
	position: absolute;
	/* bottom: -1rem;
	left: 0rem; */
	bottom: -59%;
	left: -37rem;
	border-radius: 50%;
	width: 75rem;
	height: 75rem;
`

const RightBlurFigure = styled.figure`
	position: absolute;
	right: -40rem;
	top: -20%;
	border-radius: 50%;
	width: 80rem;
	height: 80rem;
`
