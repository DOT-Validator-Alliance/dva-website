// Utils
import { Story, Meta } from "@storybook/react"

// Components
import ValidatorSection, { IProps } from "./validator-section.component"

// Data
import kusamaData from "../../validators/kusama.json"

const meta: Meta = {
	title: "Sections/ValidatorSection",
	component: ValidatorSection,
}

export default meta

const Template: Story<IProps> = (args) => <ValidatorSection {...args} />

export const Default = Template.bind({})

Default.args = {
	data: kusamaData,
	enableAnimation: true,
}
