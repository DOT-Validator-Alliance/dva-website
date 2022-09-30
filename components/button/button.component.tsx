// Utils
import { motion, HTMLMotionProps } from "framer-motion"
import styled from "styled-components"

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
			whileHover={{
				scale: props.disabled || !props.outline ? 1 : 1.02,
			}}
			whileTap={{
				scale: props.disabled || !props.outline ? 1 : 0.98,
			}}
			{...props}
		>
			<LabelSpan>
				{props.children}
				{!props.outline && (
					<IconSpan>
						<Image src="/assets/icons/right-arrow.svg" alt="Right Arrow" />
					</IconSpan>
				)}
			</LabelSpan>
		</ButtonContainer>
	)
}

export default Button

const LabelSpan = styled.span`
	position: relative;
`

const IconSpan = styled.span`
	position: absolute;
	right: -2rem;
	top: 50%;
	transform: translateY(-50%);

	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: all 0.3s ease-out;
`

export const ButtonContainer = styled(motion.button)<IProps>`
	position: relative;
	display: flex;
	justify-content: center;

	color: rgb(231, 31, 122);

	align-items: center;
	background-color: ${({ outline }) => (outline ? "transparent" : "unset")};
	border: ${({ outline }) => (outline ? "1px solid #898989" : "unset")};
	color: ${({ outline }) => (outline ? "#CACACA" : "#fff")};
	background: ${({ outline }) =>
		outline
			? "transparent"
			: `
	linear-gradient(
		90deg,
		rgba(154, 38, 141, 1),
		rgba(231, 31, 122) 51%,
		rgba(154, 38, 141, 1)
	)
		var(--x, 0) / 200%`};
	width: ${({ width }) => (width ? width : "unset")};
	font-weight: 700;
	border-radius: ${({ rounded }) => (rounded ? "999rem" : "initial")};
	margin: ${({ left, right, top, bottom }) =>
		`${top || "initial"} ${right || "initial"} ${bottom || "initial"} ${
			left || "initial"
		}`};
	transition: ${({ outline }) => (outline ? "initial" : "0.5s")};
	cursor: pointer;
	padding: 1.7rem 3.2rem;
	font-family: inherit;
	font-size: 1.6rem;
	outline: none;
	min-width: 20rem;

	&:focus {
		outline: none;
	}
	&:hover {
		--x: 100%;

		${IconSpan} {
			opacity: 1;
		}
	}
	&:disabled {
		cursor: default;
		opacity: 0.5;
	}
`
