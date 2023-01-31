import NextHead from "next/head"

export interface IProps {
  title?: string
  description?: string
  image?: string
  url?: string
  robots?: "noindex" | "nofollow" | "noindex, nofollow"
  children?: React.ReactNode | React.ReactNode[]
}

const Head = (props: IProps) => {
  return (
    <NextHead>
      {props.title && (
        <>
          <title>{props.title}</title>
          <meta property="og:title" content={props.title} />
          <meta name="twitter:title" content={props.title} />
        </>
      )}

      {props.description && (
        <>
          <meta name="description" content={props.description} />
          <meta property="og:description" content={props.description} />
          <meta name="twitter:description" content={props.description} />
        </>
      )}

      {props.image && (
        <>
          <meta name="image" content={props.image} />
          <meta property="og:image" content={props.image} />
          <meta name="twitter:image" content={props.image} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}

      {props.url && (
        <>
          <meta property="og:url" content={props.url} />
        </>
      )}

      {props.robots && (
        <>
          <meta name="robots" content={props.robots} />
        </>
      )}
      {props.children}
    </NextHead>
  )
}

export default Head
