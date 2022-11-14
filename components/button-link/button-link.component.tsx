// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Components
import Image from "../image/image.component"
import NextLink, { LinkProps } from "next/link"

export interface IProps extends LinkProps {
	width?: string
	top?: string
	children: React.ReactNode | React.ReactNode[]
	variants?: Variants
	outline?: boolean
}

const ButtonLink: React.FC<IProps> = ({
	children,
	variants,
	width,
	top,
	outline,
	...props
}) => {
	return (
		<NextLink {...props}>
			<ButtonContainer
				// whileHover={{
				// 	scale: props.disabled || !props.outline ? 1 : 1.02,
				// }}
				// whileTap={{
				// 	scale: props.disabled || !props.outline ? 1 : 0.98,
				// }}
				// {...props}
				top={top}
				width={width}
				outline={outline}
				variants={variants}
			>
				<LabelSpanContainer>
					<LabelSpan>{children}</LabelSpan>
					<IconSpan>
						<Image src="/assets/icons/right-arrow.svg" alt="Right Arrow" />
					</IconSpan>
				</LabelSpanContainer>
			</ButtonContainer>
		</NextLink>
	)
}

export default ButtonLink

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

interface IButtonProps {
	width?: string
	outline?: boolean
	top?: string
}

const ButtonContainer = styled(motion.a)<IButtonProps>`
	position: relative;
	display: flex;
	justify-content: center;

	align-items: center;
	font-weight: 700;
	width: ${({ width }) => (width ? width : "unset")};
	margin-top: ${({ top }) => (top ? top : "initial")};
	/* margin-top: 4rem; */
	transition: 0.5s;
	cursor: pointer;
	padding: 1.7rem 3.2rem;
	font-family: inherit;
	font-size: 1.6rem;
	outline: none;
	min-width: 20rem;

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

	&:focus {
		outline: none;
	}

	&:disabled {
		cursor: default;
		opacity: 0.5;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: inline-flex;

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

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`
