import React, { ReactElement } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ImageWrapper, Post, PostWrapper } from "./styles"
import { Link } from "gatsby"

type WorkoutsType = {
  postTypes?: string
  posts: {
    edges: [
      {
        node: {
          id: number | string
          excerpt: string
          title: string
          uri: string
          featuredImage: {
            node: { altText: string; gatsbyImage: object }
          }
        }
      }
    ]
  }
}
const Workouts = ({ posts, postTypes }: WorkoutsType): ReactElement => {
  const { edges } = posts

  return (
    <>
      <h2>{postTypes} - Posts</h2>
      <PostWrapper>
        {edges.map((item, key) => {
          const post = item.node
          const featuredImage = getImage(
            item.node.featuredImage.node.gatsbyImage || undefined
          )
          return (
            <Post key={key}>
              <Link to={post.uri} replace>
                <ImageWrapper>
                  <GatsbyImage
                    image={featuredImage}
                    alt={
                      featuredImage?.node?.altText ||
                      "Carol Almeida Personal Trainer"
                    }
                  />
                </ImageWrapper>
                <h3> {post.title}</h3>
                {/* <article dangerouslySetInnerHTML={{ __html: post.excerpt }} /> */}
              </Link>
            </Post>
          )
        })}
      </PostWrapper>
    </>
  )
}

export default Workouts
