// Utils
import { Story, Meta } from "@storybook/react"

// Components
import Link, { IProps } from "./link.component"

const meta: Meta = {
	title: "Components/Link",
	component: Link,
}

export default meta

const Template: Story<IProps> = (args) => <Link {...args} />

export const Default = Template.bind({})

Default.args = {
	href: "/",
	children: "Link",
}
