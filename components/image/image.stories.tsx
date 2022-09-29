import { Story, Meta } from "@storybook/react"
import Image from "./image.component"
import { LazyLoadImageProps } from "react-lazy-load-image-component"

const meta: Meta = {
	title: "Components/Image",
	component: Image,
}

export default meta

const Template: Story<LazyLoadImageProps> = (args) => <Image {...args} alt="" />

export const Default = Template.bind({})

Default.args = {
	src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
	alt: "image",
	width: "100%",
	height: "100%",
	style: {
		objectFit: "contain",
		maxHeight: "20rem",
	},
}
