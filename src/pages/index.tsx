import React, { ReactElement } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Workouts from "../components/workouts"
import * as styles from "../components/index.module.css"

type DataProps = {
  wpPage: {
    title: string
    content: string
    id: number
    featuredImage: {
      node: {
        altText: string
        gatsbyImage: object
      }
    }
  }
}

const IndexPage = ({
  data: { wpPage },
}: PageProps<DataProps>): ReactElement => (
  <Layout featuredImage={wpPage.featuredImage?.node} title={wpPage.title}>
    <Seo title="Home" />
    <h1>Home Page </h1>
    <div dangerouslySetInnerHTML={{ __html: wpPage.content }} />
    <Workouts name="keler" />
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
          altText
          gatsbyImage(placeholder: BLURRED, width: 10000, formats: [JPG])
        }
      }
    }
  }
`

export default IndexPage
