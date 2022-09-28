// Utils
import { Story, Meta } from "@storybook/react"

// Components
import Footer from "./footer.component"

export default {
	title: "Components/Footer",
	component: Footer,
} as Meta

const Template: Story = (args) => <Footer {...args} />

export const Default = Template.bind({})

Default.args = {}
