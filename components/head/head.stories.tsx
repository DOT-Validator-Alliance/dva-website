import { Story, Meta } from "@storybook/react"

import Head, { IProps } from "./head.component"

const meta: Meta = {
  title: "Components/Head",
  component: Head,
}

export default meta

const Template: Story<IProps> = (args) => <Head {...args} />

export const Default = Template.bind({})

Default.args = {
  title: "Head",
  description: "Head description",
  image: "",
  url: "",
  robots: "noindex, nofollow",
}
