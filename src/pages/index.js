import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Workouts from "../components/workouts"
import * as styles from "../components/index.module.css"

const IndexPage = ({
  data: {
    wpPage: { title, content, id, featuredImage },
  },
}) => (
  <Layout featuredImage={featuredImage?.node} title={title}>
    <Seo title="Home" />
    <h1>Home Page </h1>
    <div dangerouslySetInnerHTML={{ __html: content }} />
    <Workouts />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    wpPage(isFrontPage: { eq: true }) {
      id
      title
      template {
        templateName
      }
      content
      featuredImage {
        node {
          sourceUrl
          altText
          gatsbyImage(placeholder: BLURRED, width: 10000, formats: [JPG])
        }
      }
    }
  }
`

export default IndexPage
