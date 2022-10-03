// Utils
import { Story, Meta } from "@storybook/react"

// Components
import ButtonLink, { IProps } from "./button-link.component"

const meta: Meta = {
	title: "Components/ButtonLink",
	component: ButtonLink,
}

export default meta

const Template: Story<IProps> = (args) => <ButtonLink {...args} />

export const Default = Template.bind({})

Default.args = {
	href: "/",
	children: "Link",
}
