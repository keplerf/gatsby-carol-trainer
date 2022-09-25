import React, { ReactElement } from "react"
import { Navigation, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ImageWrapper, Post, PostWrapper } from "./styles"
import { Link } from "gatsby"

import "swiper/css"
import "swiper/css/navigation"

type WorkoutsType = {
  postTypes?: string
  posts: [
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

type PostType = {
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
const Workouts = ({ posts, postTypes }: WorkoutsType): ReactElement => {
  return (
    <>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={25}
        slidesPerView={3}
        autoHeight={true}
        freeMode={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
        {posts.map((item, key) => {
          const post = item.node
          const featuredImage = getImage(
            item.node.featuredImage.node.gatsbyImage || undefined
          )
          return (
            <SwiperSlide key={key}>
              <Post>
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
            </SwiperSlide>
          )
        })}
      </Swiper>

      <h2>{postTypes}</h2>
    </>
  )
}

export default Workouts
