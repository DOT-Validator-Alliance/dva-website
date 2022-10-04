// Utils
import { Story, Meta } from "@storybook/react"

// Components
import JoinOurCommunitySection, {
	IProps,
} from "./join-our-community-section.component"

const meta: Meta = {
	title: "Sections/JoinOurCommunitySection",
	component: JoinOurCommunitySection,
}

export default meta

const Template: Story<IProps> = (args) => <JoinOurCommunitySection {...args} />

export const Default = Template.bind({})

Default.args = {
	enableAnimation: true,
}
