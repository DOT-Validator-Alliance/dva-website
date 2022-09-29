// Utils
import { Story, Meta } from "@storybook/react"

// Components
import HeroSection from "./hero-section.component"

const meta: Meta = {
	title: "Sections/HeroSection",
	component: HeroSection,
}

export default meta

const Template: Story = (args) => <HeroSection {...args} />

export const Default = Template.bind({})
Default.args = {}
