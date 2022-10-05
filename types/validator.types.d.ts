export interface IImage {
	src: string
	alt: string
}

export interface IValidatorItem {
	name: string
	address: string
}

export interface IButton {
	label: string
	slug: string
}

export interface IValidator {
	id: number
	containerID: string
	meta: {
		title: string
		description: string
		slug: string
		image: IImage
	}
	title: string
	description: string
	image: IImage
	blop: IImage
	listLabel: string
	cta: IButton
	link: IButton
	backButton: IButton
	validators: IValidatorItem[]
}
