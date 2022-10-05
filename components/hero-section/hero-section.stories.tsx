// Utils
import { Story, Meta } from "@storybook/react"

// Components
import HeroSection, { IProps } from "./hero-section.component"

const meta: Meta = {
	title: "Sections/HeroSection",
	component: HeroSection,
}

export default meta

const Template: Story<IProps> = (args) => <HeroSection {...args} />

export const Default = Template.bind({})
Default.args = {
	enableAnimation: true,
}
