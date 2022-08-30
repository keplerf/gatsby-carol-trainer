import React, { ReactElement } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ImageWrapper, Post, PostWrapper } from "./styles"
const Workouts = ({ posts, postTypes }) => {
  const { edges } = posts

  return (
    <>
      <h2>{postTypes} - Posts</h2>
      <PostWrapper>
        {edges.map((item, key) => {
          const post = item.node
          const featuredImage = getImage(
            item.node.featuredImage?.node.gatsbyImage
          )
          return (
            <Post key={key}>
              <ImageWrapper>
                <GatsbyImage
                  image={featuredImage}
                  alt={
                    featuredImage?.altText || "Carol Almeida Personal Trainer"
                  }
                />
              </ImageWrapper>
              <h3> {post.title}</h3>
              <article dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </Post>
          )
        })}
      </PostWrapper>
    </>
  )
}

export default Workouts