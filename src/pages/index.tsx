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
  <Layout
    featuredImage={wpPage.featuredImage?.node}
    title={wpPage.title}
    isHome={true}
  >
    <Seo title="Home" />
    <div dangerouslySetInnerHTML={{ __html: wpPage.content }} />
    <Workouts posts={allWpPost.edges} postTypes="Workout " />
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
            width: 800
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
                width: 250
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
