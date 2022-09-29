// Utils
import { Story, Meta } from "@storybook/react"

// Components
import Button, { IProps } from "./button.component"

const meta: Meta = {
	title: "Components/Button",
	component: Button,
}

export default meta

const Template: Story<IProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
	children: "Button",
	disabled: false,
	onClick: () => console.log("Button clicked"),
	top: "initial",
	bottom: "initial",
	left: "initial",
	right: "initial",
	width: "initial",
	outline: false,
	rounded: false,
}
