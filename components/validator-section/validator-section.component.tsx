// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Components
import ValidatorItem from "../validator-item/validator-item.component"

// Hooks

// Types
import {
	IValidator,
	// IValidatorItem
} from "../../types/validator.types"
export interface IProps {
	data: IValidator[]
	enableAnimation: boolean
}

const variants: Variants = {
	hidden: {
		opacity: 0,
		// y: 100,
	},
	visible: {
		opacity: 1,
		// y: 0,
		transition: {
			duration: 1,
			delay: 0.5,
			staggerChildren: 0.5,
		},
	},
}

const itemVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut",
		},
	},
}

const ValidatorSection: React.FC<IProps> = ({ data, enableAnimation }) => {
	return (
		<ValidatorSectionContainer
			id="validators"
			variants={variants}
			initial="hidden"
			whileInView={"visible"}
			viewport={{ once: true }}
		>
			{data.map((validator, idx) => (
				<ValidatorItem
					key={idx}
					data={validator}
					enableAnimation={enableAnimation}
					variants={itemVariants}
					whileHover="hover"
					// initial="hidden"
					// whileInView={"visible"}
				/>
			))}
		</ValidatorSectionContainer>
	)
}

export default ValidatorSection

const ValidatorSectionContainer = styled(motion.section)`
	scroll-margin-top: 10rem;
	padding: 10rem 0 0;
	max-width: 125rem;
	margin: 0 auto 0;
	display: grid;
	gap: 10rem;
	grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
	/* align-items: center; */
	/* justify-content: center; */
	justify-items: center;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`
