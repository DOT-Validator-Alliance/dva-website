// Utils
import { Story, Meta } from "@storybook/react"

// Components
import AboutSection, { IProps } from "./about-section.component"

const meta: Meta = {
	title: "Sections/AboutSection",
	component: AboutSection,
}

export default meta

const Template: Story<IProps> = (args) => <AboutSection {...args} />

export const Default = Template.bind({})

Default.args = {
	enableAnimation: true,
}
