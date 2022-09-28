// Utils
import React from "react"

// Components
import { LazyLoadImage } from "react-lazy-load-image-component"

// Types
import { LazyLoadImageProps } from "react-lazy-load-image-component/index"

// Styles
import "react-lazy-load-image-component/src/effects/blur.css"

const Image: React.FC<LazyLoadImageProps> = ({ ...props }) => {
	return <LazyLoadImage {...props} />
}

export default Image
