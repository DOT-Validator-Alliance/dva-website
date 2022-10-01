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
	validators: IValidatorItem[]
}
