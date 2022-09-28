// Utils
import { Story, Meta } from "@storybook/react"

// Components
import Home from "../pages"

const meta: Meta = {
	title: "Pages/Home",
	component: Home,
}

export default meta

const Template: Story = (args) => <Home {...args} />

export const Default = Template.bind({})

Default.args = {}
