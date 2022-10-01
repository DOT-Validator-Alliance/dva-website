// Utils
import styled from "styled-components"
import { motion, MotionProps } from "framer-motion"

const Border: React.FC<MotionProps> = (props) => {
	return <BorderStyles {...props} />
}

export default Border

const BorderStyles = styled(motion.div)`
	margin: 1rem 0;
	height: 0.2rem;
	width: 80%;
	background: ${({ theme }) => theme.colors.borderColor};
`
