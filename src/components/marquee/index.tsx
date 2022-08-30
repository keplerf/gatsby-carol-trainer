import React, { ReactElement } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MarqueeWrapper } from "./styles"

const Marquee = ({
  featuredImage,
  title,
}: {
  featuredImage: {
    altText: string
    gatsbyImage: object
  }
  title: string
}): ReactElement => {
  return (
    <MarqueeWrapper>
      <h1
        style={{
          zIndex: "2",
          fontSize: "10vw",
          lineHeight: "9vw",
          color: "white",
          textShadow: "5px 5px 3px rgb(0 0 0 / 20%)",
          margin: "0",
        }}
      >
        {title}
      </h1>
      <GatsbyImage
        style={{
          position: "absolute",
          top: "0",
          width: "100%",
          opacity: "0.2",
          bottom: "0",
        }}
        image={getImage(featuredImage?.gatsbyImage)}
        alt={featuredImage?.altText || "Carol Almeida Personal Trainer"}
      />
    </MarqueeWrapper>
  )
}

export default Marquee
