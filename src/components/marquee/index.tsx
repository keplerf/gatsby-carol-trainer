import React, { ReactElement } from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { MarqueeWrapper, MarqueConatiner, MarqueeContent } from "./styles"
import Youtube from "../youtube"

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
    <MarqueConatiner>
      <MarqueeWrapper>
        <MarqueeContent>
          <section>
            <h1>{title}</h1>
            <h2>Personal Trainer</h2>
            <p>
              Workouts <span>/</span> In-person Training <span>/</span> Fitness
              Programs
            </p>
          </section>
          <StaticImage
            placeholder="blurred"
            src="../../images/Carol-Almeida-personal-trainer.png"
            // loading="eager"
            width={550}
            quality={55}
            formats={["auto", "webp", "avif"]}
            alt="Carol Almeida Personal Trainer"
            style={{
              top: "0",
              right: "0",
              width: "100%",
              zIndex: 4,
            }}
          />
        </MarqueeContent>
        <GatsbyImage
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            opacity: "0.2",
            bottom: "0",
            zIndex: 3,
          }}
          image={getImage(featuredImage?.gatsbyImage)}
          alt={featuredImage?.altText || "Carol Almeida Personal Trainer"}
        />
        <Youtube />
      </MarqueeWrapper>
    </MarqueConatiner>
  )
}

export default Marquee
