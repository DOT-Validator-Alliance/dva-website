// Utils
import { motion, HTMLMotionProps } from "framer-motion"
import styled, { css } from "styled-components"
import { isMobile } from "react-device-detect"

// Compoennts
import Image from "../image/image.component"

export interface IProps extends HTMLMotionProps<"button"> {
	top?: string
	bottom?: string
	left?: string
	right?: string
	width?: string
	outline?: boolean
	rounded?: boolean
}

const Button: React.FC<IProps> = (props) => {
	return (
		<ButtonContainer
			// whileHover={{
			// 	scale: props.disabled || !props.outline ? 1 : 1.02,
			// }}
			// whileTap={{
			// 	scale: props.disabled || !props.outline ? 1 : 0.98,
			// }}
			{...props}
		>
			<LabelSpanContainer>
				<LabelSpan>{props.children}</LabelSpan>
				<IconSpan>
					<Image src="/assets/icons/right-arrow.svg" alt="Right Arrow" />
				</IconSpan>
			</LabelSpanContainer>
		</ButtonContainer>
	)
}

export default Button

const LabelSpanContainer = styled.span`
	position: relative;
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

export const ButtonContainer = styled(motion.button)<IProps>`
	position: relative;
	display: flex;
	justify-content: center;

	align-items: center;
	background-color: ${({ outline }) => (outline ? "transparent" : "unset")};
	border: ${({ outline, theme }) =>
		outline ? theme.colors.buttonOutline : "unset"};
	color: ${({ outline, theme }) =>
		outline ? theme.colors.buttonOutlineColor : theme.colors.buttonColor};
	background: ${({ outline, theme }) =>
		outline
			? "transparent"
			: `${theme.colors.buttonBackground}
		var(--x, 0) / 200%`};
	width: ${({ width }) => (width ? width : "unset")};
	font-weight: 700;
	border-radius: ${({ rounded }) => (rounded ? "999rem" : "initial")};
	margin: ${({ left, right, top, bottom }) =>
		`${top || "initial"} ${right || "initial"} ${bottom || "initial"} ${
			left || "initial"
		}`};
	cursor: pointer;
	padding: 1.7rem 3.2rem;
	font-family: inherit;
	font-size: 1.6rem;
	outline: none;
	min-width: 20rem;

	&:focus {
		outline: none;
	}

	${!isMobile &&
	css`
		&:hover {
			--x: 100%;

			${IconSpan} {
				opacity: 1;
			}

			${LabelSpan} {
				margin-left: -1rem;
				margin-right: 1rem;
			}
		}
	`}

	&:disabled {
		cursor: default;
		/* opacity: 0.5; */

		&:hover {
			--x: 100%;

			${IconSpan} {
				opacity: 0;
			}

			${LabelSpan} {
				margin-left: 0;
				margin-right: 0;
			}
		}
	}
`
