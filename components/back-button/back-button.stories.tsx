// Utils
import { Story, Meta } from "@storybook/react"

// Components
import BackButton, { IProps } from "./back-button.component"

const meta: Meta = {
	title: "Components/BackButton",
	component: BackButton,
}

export default meta

const Template: Story<IProps> = (args) => <BackButton {...args} />

export const Default = Template.bind({})
Default.args = {
	children: "Link",
}
