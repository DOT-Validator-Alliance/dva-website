// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Components
import Image from "../image/image.component"
import Link from "next/link"

// Icons

import { FaTelegramPlane } from "react-icons/fa"
import { IoLogoDiscord } from "react-icons/io5"

export interface IProps {
	enableAnimation: boolean
}

const variants: Variants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			delay: 0.2,
			ease: [0.5, 0, 0.56, 0.99],
			staggerChildren: 0.2,
		},
	},
}

const JoinOurCommunitySection: React.FC<IProps> = ({ enableAnimation }) => {
	return (
		<Container>
			<JoinOurCommunitySectionContainer
				variants={enableAnimation ? variants : {}}
				initial="hidden"
				whileInView="visible"
				exit="hidden"
				viewport={{ once: true }}
			>
				<Col>
					<Title>Join our community!</Title>
					<Description>
						Get help and the latest news from Polkadot ecosystem.
					</Description>
				</Col>
				<Col>
					<IluFigure>
						<Image
							src="/assets/join-our-community-section/ilu.png"
							alt="Join our community illustration"
							width={"100%"}
							height={"100%"}
							effect="blur"
							style={{ objectFit: "cover" }}
						/>
					</IluFigure>

					<Link href="https://t.me/DotValidators">
						<SocialLink
							whileHover={{
								scale: 1.02,
							}}
							whileTap={{
								scale: 0.98,
							}}
						>
							<IconSpan>
								<FaTelegramPlane />
							</IconSpan>
							<span>Telegram</span>
						</SocialLink>
					</Link>
					<Link href="https://discord.com/invite/Kwfbe6YRAd">
						<SocialLink
							whileHover={{
								scale: 1.02,
							}}
							whileTap={{
								scale: 0.98,
							}}
						>
							<IconSpan>
								<IoLogoDiscord />
							</IconSpan>
							<span>Discord</span>
						</SocialLink>
					</Link>
				</Col>
			</JoinOurCommunitySectionContainer>
		</Container>
	)
}

export default JoinOurCommunitySection

const Container = styled.div`
	padding: 0 2rem;
`

const JoinOurCommunitySectionContainer = styled(motion.section)`
	position: relative;
	max-width: 125rem;
	margin: 15rem auto 0;
	background: ${({ theme }) => theme.joinOurCommunitySection.backgroundColor};
	display: grid;

	grid-template-columns: 1fr;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 20rem auto 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: 1fr 1fr;
		}
	}
`

const Title = styled.h2`
	font-size: 4rem;
	line-height: 1.2;
	margin-bottom: 1rem;
`

const Description = styled.p`
	max-width: 35rem;
	font-size: 1.8rem;
	color: ${({ theme }) => theme.joinOurCommunitySection.descriptionColor};
`

const Col = styled.div`
	padding: 2rem;

	&:nth-child(1) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		z-index: 1;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					text-align: start;
					justify-content: start;
					align-items: start;
				}
			}
		}
	}

	&:nth-child(2) {
		/* border: 1px solid blue; */
		display: flex;
		justify-content: space-evenly;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					position: relative;
				}
			}
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 4rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: 6rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const IluFigure = styled.figure`
	position: absolute;
	/* border: 1px solid green; */

	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	/* z-index: -1; */
	/* width: 100%;
	height: 100%; */
`

const SocialLink = styled(motion.a)`
	position: relative;
	z-index: 1;
	display: flex;
	align-items: center;
	flex-direction: column;
`

const IconSpan = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 6rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 10rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`
