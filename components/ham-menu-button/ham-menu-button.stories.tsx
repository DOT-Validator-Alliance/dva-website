// Utils
import { Story, Meta } from "@storybook/react"

// Components
import HamMenuButton, { IProps } from "./ham-menu-button.component"

const meta: Meta = {
	title: "Components/HamMenuButton",
	component: HamMenuButton,
}

export default meta

const Template: Story<IProps> = (args) => <HamMenuButton {...args} />

export const Default = Template.bind({})

Default.args = {
	isOpen: false,
	onClick: () => {},
}
