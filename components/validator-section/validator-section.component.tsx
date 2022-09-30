// Utils
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Image from "../image/image.component"
import Button from "../button/button.component"

// Types
import { IValidator } from "../../types/validator.types"
export interface IProps {
	data: IValidator
	enableAnimation: boolean
}

const ValidatorSection: React.FC<IProps> = ({ data, enableAnimation }) => {
	return (
		<ValidatorSectionContainer>
			<Col>
				<IluFigure
					// initial={{ y: 0 }}
					whileInView={
						enableAnimation
							? { y: [0, -15, 0], scale: [1, 0.97, 1] }
							: undefined
					}
					transition={{
						duration: 4,
						repeat: Infinity,
						delay: 5.1,

						// ease: [0.64, 0.33, 0.64, 0.86],
					}}
				>
					<Image
						src={data.image.src}
						alt={data.image.alt}
						width={"100%"}
						height={"100%"}
						effect="blur"
						style={{ objectFit: "contain", objectPosition: "center" }}
					/>
				</IluFigure>
			</Col>
			<Col>
				<h2>{data.title}</h2>
				<p>{data.description}</p>

				<div>
					<p>{data.listLabel}</p>
					<ul>
						{data.validators.map((validator, index) => (
							<li key={index}>
								<h2>{validator.name}</h2>
								<p>{validator.address}</p>
							</li>
						))}
					</ul>
				</div>

				<Button>{data.cta.label}</Button>
			</Col>
		</ValidatorSectionContainer>
	)
}

export default ValidatorSection

const ValidatorSectionContainer = styled.section`
	position: relative;
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: 1fr;
	padding: 0 2rem;
	max-width: 125rem;
	margin: 5rem auto 0;
	/* border: 1px solid blue; */
	/* justify-items: center; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 2rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: minmax(44.5rem, 1fr) 1fr;
			justify-items: unset;
			padding: 0 0;
		}
	}
`

const Col = styled.div`
	&:nth-child(2) {
		/* margin-top: 2rem; */
		/* justify-self: center; */

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			/* margin-left: 4rem; */
			@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					/* margin-top: 6rem; */
					justify-self: unset;
				}
			}
		}
	}

	&:nth-child(1) {
		/* border: 1px solid green; */
		justify-self: center;
		align-self: center;
		grid-row: 1 / 3;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				justify-self: unset;
				grid-row: unset;
			}
		}
	}
`

const IluFigure = styled(motion.figure)`
	max-width: 30rem;
	margin: 0 auto;
	width: 100%;
	max-height: 100rem;
	/* height: 100%; */
`
