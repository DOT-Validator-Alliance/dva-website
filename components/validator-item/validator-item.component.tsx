// Utils
import styled from "styled-components"
import { motion, MotionProps } from "framer-motion"

// Components
import Image from "../image/image.component"
// import Button from "../button/button.component"
import Link from "../link/link.component"

// Types
import {
	IValidator,
	// IValidatorItem
} from "../../types/validator.types"
export interface IProps extends MotionProps {
	data: IValidator
	enableAnimation: boolean
}

const ValidatorItem: React.FC<IProps> = ({
	data,
	enableAnimation,
	...props
}) => {
	return (
		<Container key={data.id} {...props}>
			<ImageContainer>
				<BlurFigure
					initial={{ scale: 1 }}
					whileInView={enableAnimation ? undefined : { scale: 1.3 }}
					transition={{ duration: 1, ease: "easeIn", delay: 0.1 }}
					viewport={{ amount: 0.5 }}
				>
					<Image
						src={data.blop.src}
						alt={data.blop.alt}
						effect="blur"
						width={"100%"}
						height={"100%"}
						style={{ objectFit: "contain" }}
					/>
				</BlurFigure>
				<IluFigure>
					<Image
						src={data.image.src}
						alt={data.image.alt}
						width={"100%"}
						height={"100%"}
						effect="blur"
						style={{ objectFit: "contain" }}
					/>
				</IluFigure>
			</ImageContainer>
			<Title>{data.title}</Title>
			<Description dangerouslySetInnerHTML={{ __html: data.description }} />
			<Link href={data.link.slug}>{data.link.label}</Link>
		</Container>
	)
}

export default ValidatorItem

const ImageContainer = styled.div`
	position: relative;
`

const BlurFigure = styled(motion.figure)`
	position: absolute;
	top: -15rem;
	left: -12rem;
	width: 40rem;
	height: 50rem;
	/* border: 1px solid red; */
	transition: all 0.3s ease-out;
	z-index: -1;
`

const IluFigure = styled.figure`
	width: 20rem;
	height: 20rem;
`

const Title = styled.h2`
	font-family: "Space Grotesk";
	font-weight: 600;
	font-size: 3rem;
	line-height: 3.8rem;
	margin-bottom: 1.5rem;
`

const Description = styled.p`
	font-family: "Inter";
	font-weight: 400;
	font-size: 1.3rem;
	line-height: 1.6rem;
	text-align: center;
	max-width: 26rem;
	margin-bottom: 2.1rem;
	flex-grow: 1;
	color: #898989;
`

const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;

	&:hover {
		${BlurFigure} {
			/* transform: translate(-50%, -50%) scale(1.2); */
			transform: scale(1.3);
		}
	}
`
