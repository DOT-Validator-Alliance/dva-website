// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Components
import Image from "../image/image.component"
import NextLink, { LinkProps } from "next/link"

export interface IProps extends LinkProps {
	children: React.ReactNode | React.ReactNode[]
	variants?: Variants
}

const Link: React.FC<IProps> = ({ children, variants, ...props }) => {
	return (
		<NextLink {...props}>
			<CtaLink
				// whileHover={{
				// 	scale: 1.02,
				// }}
				// whileTap={{
				// 	scale: 0.98,
				// }}
				variants={variants}
			>
				<LabelSpan>{children}</LabelSpan>
				<IconSpan>
					<Image src="/assets/icons/right-arrow-pink.svg" alt="Right Arrow" />
				</IconSpan>
			</CtaLink>
		</NextLink>
	)
}

export default Link

const LabelSpan = styled.span`
	position: relative;
	transition: all 0.3s ease-out;
	background: ${({ theme }) => theme.validatorSection.linkColor};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
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

const CtaLink = styled(motion.a)`
	position: relative;
	display: inline-flex;
	align-items: center;
	gap: 1rem;
	font-size: 1.6rem;
	padding: 1rem 1rem 1rem 0;
	font-weight: 600;
	background: ${({ theme }) => theme.validatorSection.linkColor};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	&:hover {
		${IconSpan} {
			opacity: 1;
		}

		${LabelSpan} {
			margin-left: -1.5rem;
			margin-right: 1.5rem;
		}
	}
`
