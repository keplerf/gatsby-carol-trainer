import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const WpPage = ({
  data: {
    wpPage: { title, content, id, featuredImage },
  },
}) => {
  return (
    <Layout featuredImage={featuredImage?.node} title={title}>
      <Seo title="Home-Page" />
      <div className={`page-${id}`}>
        <h1>{title} - Page</h1>
        {featuredImage && (
          <GatsbyImage
            image={getImage(featuredImage?.node.gatsbyImage)}
            alt={
              featuredImage?.node.altText || "Carol Almeida Personal Trainer "
            }
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query ($id: String, $width: Int = 1000) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
          gatsbyImage(placeholder: BLURRED, width: $width, formats: [JPG])
        }
      }
    }
  }
`
export default WpPage
