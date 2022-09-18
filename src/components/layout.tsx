import React, { ReactNode, ReactElement } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Header from "./header"
import Marquee from "./marquee"

const Layout = ({
  children,
  featuredImage,
  title,
  isHome,
}: {
  children: ReactNode
  featuredImage: { altText: string; gatsbyImage: object }
  title: string
  isHome: boolean
}): ReactElement => {
  return (
    <>
      <Header siteTitle={`Carol Almeida Personal Trainer`} />
      <Marquee featuredImage={featuredImage} title={title} isHome={isHome} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          width: "100%",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-6)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot;
          {` `}
          <a href="https://caroltrainer.com/">Carol Personal Trainer </a>
        </footer>
      </div>
    </>
  )
}

export default Layout
