// Utils
import { Story, Meta } from "@storybook/react"

// Components
import Header from "./header.component"

export default {
	title: "Components/Header",
	component: Header,
} as Meta

const Template: Story = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
