import React, { ReactElement } from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Workouts from "../components/workouts"

type DataProps = {
  allWpPost: {
    edges: {
      nodes: {
        id: number
        content: string
        title: string
        featuredImage: {
          node: {
            altText: string
            gatsbyImage: object
          }
        }
      }
    }
  }
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
  data: { wpPage, allWpPost },
}: PageProps<DataProps>): ReactElement => (
  <Layout featuredImage={wpPage.featuredImage?.node} title={wpPage.title}>
    <Seo title="Home" />
    {/* <h1>Home Page </h1> */}
    <div dangerouslySetInnerHTML={{ __html: wpPage.content }} />
    <Workouts posts={allWpPost} postTypes="Workout " />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    wpPage(isFrontPage: { eq: true }) {
      id
      title
      dynamic {
        videoId
      }
      template {
        templateName
      }
      content
      featuredImage {
        node {
          altText
          gatsbyImage(
            placeholder: BLURRED
            width: 1000
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { id: { eq: "dGVybTo4" } } } }
      }
    ) {
      edges {
        node {
          id
          excerpt
          title
          uri
          featuredImage {
            node {
              altText
              gatsbyImage(
                placeholder: BLURRED
                width: 400
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`

export default IndexPage
