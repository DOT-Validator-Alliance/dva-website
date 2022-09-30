export interface IImage {
	src: string
	alt: string
}

export interface IValidatorItem {
	name: string
	address: string
}

export interface IValidator {
	title: string
	description: string
	image: IImage
	blop: IImage
	listLabel: string
	cta: {
		label: string
		slug: string
	}
	validators: IValidatorItem[]
}
