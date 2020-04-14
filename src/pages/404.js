import React from "react"
import "../components/styles.css"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div style={{ height: `100%` }}>
    <>
      <SEO title="404: Not found" />
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          flexDirection: `column`,
        }}
      >
        <h1>404</h1>
        <Link to="/">back</Link>
      </div>
    </>
  </div>
)

export default NotFoundPage
