// Utils
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Components
import Image from "../image/image.component"
import FlexContainer from "../flex-container/flex-container.component"
import HamMenuButton from "../ham-menu-button/ham-menu-button.component"
import Link from "next/link"

// Hooks
import { useBoolean } from "usehooks-ts"

// Icons
import { AiOutlineRight } from "react-icons/ai"

const Header: React.FC = () => {
	const { value: isMenuOpen, toggle: toggleMenu } = useBoolean(false)

	const navItems = [
		{
			label: "Validators",
			slug: "/",
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
			slug: "#",
			icon: {
				src: "/assets/icons/telegram-icon.svg",
				alt: "Telegram Logo",
				width: 20,
			},
		},
		{
			slug: "#",
			icon: {
				src: "/assets/icons/discord-icon.svg",
				alt: "Discord Logo",
				width: 15,
			},
		},
	]

	return (
		<>
			<HeaderContainer>
				<FlexContainer
					alignItems="center"
					justifyContent="space-between"
					height="100%"
				>
					<LogoFigure>
						<Image
							src="/assets/aliancelogo.png"
							alt="Validator Alliance Logo"
						/>
					</LogoFigure>

					<Nav>
						<NavList>
							{navItems.map((item, index) => (
								<NavItem key={index}>
									<Link href={item.slug}>
										<a>
											{item.label}{" "}
											<span>
												<AiOutlineRight />
											</span>
										</a>
									</Link>
								</NavItem>
							))}
						</NavList>
					</Nav>

					<SocialsContainer>
						<SocialsList>
							{socialItems.map((item, index) => (
								<SocialsItem key={index}>
									<SocialsLink href={item.slug}>
										<Image
											src={item.icon.src}
											alt={item.icon.alt}
											width={item.icon.width}
										/>
									</SocialsLink>
								</SocialsItem>
							))}
						</SocialsList>
						<HamMenuButton isOpen={isMenuOpen} onClick={() => toggleMenu()} />
					</SocialsContainer>
				</FlexContainer>
			</HeaderContainer>
			<AnimatePresence mode="wait">
				{isMenuOpen && (
					<MobileMenuContainer
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						{/* <BottomBlurFigure />
						<RightBlurFigure /> */}

						<BottomBlurFigure>
							{/* <Image
								src="/assets/header/blur-left-bottom.png"
								alt="bottom blur"
								effect="blur"
							/> */}
						</BottomBlurFigure>
						<RightBlurFigure>
							{/* <Image
								src="/assets/header/blur-right.png"
								alt="right blur"
								effect="blur"
							/> */}
						</RightBlurFigure>
						<MobileList>
							{navItems.map((item, index) => (
								<MobileItem key={index}>
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
		padding: 0 3rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 0 7rem;
		}
	}
`

const LogoFigure = styled.figure``

const Nav = styled.nav``

const NavList = styled.ul`
	display: none;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
		gap: 2rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const NavItem = styled.li`
	a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 400;

		color: ${({ theme }) => theme.header.navItemColor};

		span {
			visibility: hidden;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&:hover {
			color: ${({ theme }) => theme.header.activeNavItemColor};
			font-weight: 600;

			span {
				visibility: visible;
			}
		}
	}
`

const SocialsContainer = styled.div`
	display: flex;
	gap: 3rem;
	align-items: center;
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
	padding: 1rem;
	border-radius: 50%;
	width: 4.7rem;
	height: 4.7rem;

	&:hover {
		border: 1px solid ${({ theme }) => theme.header.activeNavItemColor};
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
	bottom: -5rem;
	left: -12rem;
	width: 30rem;
	height: 30rem;
	background-color: ${({ theme }) => theme.colors.secondary};
	border-radius: 50%;
	filter: blur(5rem);

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		filter: blur(14rem);
	}
`

const RightBlurFigure = styled.figure`
	position: absolute;
	/* right: 0rem; */
	top: 30%;
	right: -15rem;
	width: 30rem;
	height: 30rem;
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 50%;
	filter: blur(7rem);

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		filter: blur(16rem);
	}
`
