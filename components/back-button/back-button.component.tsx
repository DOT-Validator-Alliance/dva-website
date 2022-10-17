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

const BackButton: React.FC<IProps> = ({ children, variants, ...props }) => {
	return (
		// <NextLink {...props}>
		<BackButtonStyles variants={variants}>
			<IconSpan>
				<Image src="/assets/icons/right-arrow-pink.svg" alt="Right Arrow" />
			</IconSpan>
			<LabelSpan>{children}</LabelSpan>
		</BackButtonStyles>
		// </NextLink>
	)
}

export default BackButton

const LabelSpan = styled.span`
	position: relative;
	transition: all 0.3s ease-out;
	background: ${({ theme }) => theme.validatorSection.backButtonColor};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

const IconSpan = styled.span`
	position: absolute;
	left: -1rem;
	top: 50%;
	transform: translateY(-50%) rotate(180deg);

	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: all 0.3s ease-out;
`

const BackButtonStyles = styled(motion.button)`
	cursor: pointer;
	position: relative;
	display: inline-flex;
	align-items: center;
	gap: 1rem;
	font-size: 1.6rem;
	font-weight: 600;
	background: ${({ theme }) => theme.validatorSection.backButtonColor};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	&:hover {
		${IconSpan} {
			opacity: 1;
		}

		${LabelSpan} {
			margin-left: 1rem;
			margin-right: -1rem;
		}
	}
`
