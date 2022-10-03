// Utils
import { Story, Meta } from "@storybook/react"

// Components
import Border from "./border.component"

const meta: Meta = {
	title: "Components/Border",
	component: Border,
}

export default meta

const Template: Story = (args) => <Border {...args} />

export const Default = Template.bind({})

Default.args = {}
