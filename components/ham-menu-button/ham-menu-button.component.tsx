// Utils
import styled, { css } from "styled-components"

export interface IProps {
	isOpen: boolean
	onClick: () => void
}

const HamMenuButton: React.FC<IProps> = ({ isOpen, onClick }) => {
	return (
		<ToggleButton onClick={onClick} isOpen={isOpen}>
			<div />
			<div />
			<div />
		</ToggleButton>
	)
}

export default HamMenuButton

export const ToggleButton = styled.button<IProps>`
	display: block;
	cursor: pointer;
	transition: all 0.5s ease-out;
	background-color: transparent;
	border: none;
	width: 3.5rem;
	height: 2.5rem;
	position: relative;

	&:focus {
		outline: none;
	}

	div {
		position: absolute;
		width: 3.5rem;
		height: 2.5px;
		background-color: ${({ theme, isOpen }) =>
			!isOpen ? theme.fonts.secondary : theme.colors.primary};
		transition: all 0.3s ease-in-out;
		${(props) =>
			props.isOpen
				? css`
						&:nth-child(1) {
							top: 1rem;
							transform: rotate(45deg);
						}
						&:nth-child(2) {
							opacity: 0;
						}
						&:nth-child(3) {
							bottom: 1.3rem;
							transform: rotate(-45deg);
						}
				  `
				: css`
						&:nth-child(1) {
							top: 0;
						}
						&:nth-child(2) {
							top: 50%;
							transform: translateY(-50%);
						}
						&:nth-child(3) {
							bottom: 0;
						}
				  `}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
		outline: none;
		border: none;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`
