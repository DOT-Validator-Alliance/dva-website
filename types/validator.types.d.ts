export interface IImage {
	src: string
	alt: string
}

export interface IValidatorItem {
	name: string
	address: string
}

export interface IValidator {
	id: number
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
	cta: {
		label: string
		slug: string
	}
	link: {
		label: string
		slug: string
	}
	backButtonLabel: string
	validators: IValidatorItem[]
}
