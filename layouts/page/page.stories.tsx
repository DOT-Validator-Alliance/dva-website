// Utils
import { Story, Meta } from "@storybook/react"

// Components
import PageLayout, { IProps } from "./page.layout"

const meta: Meta = {
	title: "Layouts/Page",
	component: PageLayout,
}

export default meta

const Template: Story<IProps> = (args) => <PageLayout {...args} />

export const Default = Template.bind({})

Default.args = {
	children: "PageLayout children content",
}
