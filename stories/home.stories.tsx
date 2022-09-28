// Utils
import { Story, Meta } from "@storybook/react"

// Layout
import PageLayout from "../layouts/page/page.layout"

// Components
import Home from "../pages"

const meta: Meta = {
	title: "Pages/Home",
	component: Home,
	decorators: [
		(Story) => (
			<PageLayout>
				<Story />
			</PageLayout>
		),
	],
}

export default meta

const Template: Story = (args) => <Home {...args} />

export const Default = Template.bind({})

Default.args = {}
