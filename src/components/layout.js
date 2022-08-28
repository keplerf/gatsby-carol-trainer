import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Header from "./header"
import Marquee from "./marquee"

const Layout = ({ children, featuredImage, title }) => {
  return (
    <>
      <Header siteTitle={`Carol Almeida Personal Trainer`} />
      <Marquee featuredImage={featuredImage} title={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  featuredImage: PropTypes.object,
}

export default Layout
