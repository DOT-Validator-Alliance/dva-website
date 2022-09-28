import { Story, Meta } from "@storybook/react"
import FlexContainer, { IProps } from "./flex-container.component"

const EmptySquare: React.FC = () => (
	<div
		style={{ width: "100px", height: "100px", backgroundColor: "#f00" }}
	></div>
)

const meta: Meta = {
	title: "Components/FlexContainer",
	component: FlexContainer,
	subcomponents: { EmptySquare },
}

export default meta

const Template: Story<IProps> = (args) => (
	<FlexContainer {...args}>
		<EmptySquare />
		<EmptySquare />
		<EmptySquare />
		<EmptySquare />
		<EmptySquare />
		<EmptySquare />
		<EmptySquare />
		<EmptySquare />
	</FlexContainer>
)

export const Default = Template.bind({})

Default.args = {
	justifyContent: "flex-start",
	alignItems: "flex-start",
	gap: "1rem",
	flexDirection: "unset",
	top: "initial",
	left: "initial",
	right: "initial",
	bottom: "initial",
	width: "initial",
	wrap: "wrap",
}
