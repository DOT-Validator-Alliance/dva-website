// utils
import { motion, MotionProps } from "framer-motion"
import styled from "styled-components"

export interface IProps extends MotionProps {
	gap?: string
	justifyContent?: string
	flexDirection?: string
	alignItems?: string
	top?: string
	left?: string
	right?: string
	bottom?: string
	wrap?: string
	children?: React.ReactNode | React.ReactNode[]
	width?: string
	height?: string
}

const FlexContainer: React.FC<IProps> = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>
}

const Container = styled(motion.div)<IProps>`
	display: flex;
	flex-wrap: ${({ wrap }) => (wrap ? wrap : "wrap")};
	justify-content: ${({ justifyContent }) =>
		justifyContent ? justifyContent : "space-between"};
	align-items: ${({ alignItems }) => (alignItems ? alignItems : "unset")};
	flex-direction: ${({ flexDirection }) =>
		flexDirection ? flexDirection : "unset"};
	--gap: ${({ gap }) => (gap ? gap : "1rem")};
	gap: var(--gap);
	width: ${({ width }) => (width ? width : "initial")};
	height: ${({ height }) => (height ? height : "initial")};
	margin-top: ${({ top }) => (top ? top : "initial")};
	margin-right: ${({ right }) => (right ? right : "initial")};
	margin-left: ${({ left }) => (left ? left : "initial")};
	margin-bottom: ${({ bottom }) => (bottom ? bottom : "initial")};
`

export default FlexContainer
