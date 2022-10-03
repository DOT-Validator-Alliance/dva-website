// Utils
import styled, { css } from "styled-components"

export interface IProps {
	isOpen: boolean
	onClick: () => void
}

const HamMenuButton: React.FC<IProps> = ({ isOpen, onClick }) => {
	return (
		<div
		// class="menu btn1"
		>
			<ToggleButton
				onClick={onClick}
				className={isOpen ? "open" : ""}
				isOpen={isOpen}
			>
				<Left
				// class="icon-left"
				></Left>
				<Right
				// class="icon-right"
				></Right>
			</ToggleButton>
		</div>
	)
}

export default HamMenuButton

const Left = styled.div`
	transition-duration: 0.5s;
	position: absolute;
	height: 0.4rem;
	width: 2rem;
	/* right: 2rem; */
	top: 2rem;
	background-color: ${({ theme }) => theme.header.hamColor};

	&:before {
		transition-duration: 0.5s;
		position: absolute;
		width: 2rem;
		height: 0.4rem;
		background-color: ${({ theme }) => theme.header.hamColor};

		content: "";
		top: -1.5rem;
		right: 0;
	}

	&:after {
		transition-duration: 0.5s;
		position: absolute;
		width: 2rem;
		height: 0.4rem;
		background-color: ${({ theme }) => theme.header.hamColor};
		content: "";
		top: 1.5rem;
		right: 0;
	}

	&:hover {
		cursor: pointer;
	}
`

const Right = styled.div`
	transition-duration: 0.5s;
	position: absolute;
	height: 0.4rem;
	width: 2rem;
	left: 2rem;
	top: 2rem;
	background-color: ${({ theme }) => theme.header.hamColor};

	&:before {
		transition-duration: 0.5s;
		position: absolute;
		width: 2rem;
		height: 0.4rem;
		background-color: ${({ theme }) => theme.header.hamColor};
		content: "";
		top: -1.5rem;
		right: 0;
	}

	&:after {
		transition-duration: 0.5s;
		position: absolute;
		width: 2rem;
		height: 0.4rem;
		background-color: ${({ theme }) => theme.header.hamColor};
		content: "";
		top: 1.5rem;
		right: 0;
	}

	&:hover {
		cursor: pointer;
	}
`

export const ToggleButton = styled.button<IProps>`
	display: block;
	position: relative;
	width: 4rem;
	height: 4rem;
	/* top: 10rem; */
	/* left: 0; */
	transition-duration: 0.5s;
	/* @include btn(0px, 100px); */
	background-color: transparent;
	margin-bottom: 0.4rem;

	&.open {
		${Left} {
			transition-duration: 0.5s;
			background: transparent;
			/* background: ${({ theme }) => theme.header.activeHamColor};
			background-color: transparent; */

			&:before {
				transform: rotateZ(45deg) scaleX(1.4) translate(4px, 4px);
				background: ${({ theme }) => theme.header.activeHamColorReverse};
				background-color: transparent;
			}

			&:after {
				transform: rotateZ(-45deg) scaleX(1.4) translate(4px, -4px);
				background: ${({ theme }) => theme.header.activeHamColorReverse};
				background-color: transparent;
			}
		}

		${Right} {
			transition-duration: 0.5s;
			background: transparent;
			/* background: ${({ theme }) => theme.header.activeHamColor};
			background-color: transparent; */

			&:before {
				transform: rotateZ(-45deg) scaleX(1.4) translate(-4px, 4px);
				background: ${({ theme }) => theme.header.activeHamColor};
				background-color: transparent;
			}

			&:after {
				transform: rotateZ(45deg) scaleX(1.4) translate(-4px, -4px);
				background: ${({ theme }) => theme.header.activeHamColor};
				background-color: transparent;
			}
		}
	}

	&:hover {
		cursor: pointer;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
		outline: none;
		border: none;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`
