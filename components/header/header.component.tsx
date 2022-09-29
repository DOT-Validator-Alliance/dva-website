// Utils
import styled from "styled-components"

// Components
import Image from "../image/image.component"
import FlexContainer from "../flex-container/flex-container.component"
import Link from "next/link"

// Icons
import { AiOutlineRight } from "react-icons/ai"

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<FlexContainer
				alignItems="center"
				justifyContent="space-between"
				height="100%"
			>
				<LogoFigure>
					<Image src="/assets/aliancelogo.png" alt="Validator Alliance Logo" />
				</LogoFigure>

				<Nav>
					<NavList>
						<NavItem>
							<Link href="/">
								<a>
									Validators{" "}
									<span>
										<AiOutlineRight />
									</span>
								</a>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/">
								<a>
									Manifesto{" "}
									<span>
										<AiOutlineRight />
									</span>
								</a>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/">
								<a>
									How to nominate{" "}
									<span>
										<AiOutlineRight />
									</span>
								</a>
							</Link>
						</NavItem>
					</NavList>
				</Nav>

				<SocialsContainer>
					<SocialsList>
						<SocialsItem>
							<SocialsLink href="#">
								<Image
									src="/assets/icons/telegram-icon.svg"
									alt="Telegram Logo"
								/>
							</SocialsLink>
						</SocialsItem>
						<SocialsItem>
							<SocialsLink href="#">
								<Image
									src="/assets/icons/discord-icon.svg"
									alt="Discord Logo"
								/>
							</SocialsLink>
						</SocialsItem>
					</SocialsList>
				</SocialsContainer>
			</FlexContainer>
		</HeaderContainer>
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
	padding: 1rem 3rem;
	height: 10rem;
`

const LogoFigure = styled.figure``

const Nav = styled.nav``

const NavList = styled.ul`
	display: flex;
	gap: 1.5rem;
`

const NavItem = styled.li`
	a {
		display: flex;
		align-items: center;

		color: ${({ theme }) => theme.header.navItemColor};

		span {
			visibility: hidden;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&:hover {
			color: ${({ theme }) => theme.header.activeNavItemColor};

			span {
				visibility: visible;
			}
		}
	}
`

const SocialsContainer = styled.div``

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
