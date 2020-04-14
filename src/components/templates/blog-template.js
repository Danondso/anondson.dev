import React from "react"
import { graphql } from "gatsby"
import BackgroundColorLayout from "../layouts/background-color-layout"
import Footer from "../sections/footer-section"
import Navbar from "../sections/navbar/navbar"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Navbar />

      <BackgroundColorLayout
        colorName="#FACFAD"
        altName="Colored background containing contact and footer info"
      >
        <div
          className="blog-post-container"
          style={{
            display: `flex`,
            justifyContent: `center`,
            padding: `7.5rem`,
            color: `#3E4E50`,
            margin: `0 auto`,
          }}
        >
          <div style={{ maxWidth: `40rem` }}>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <h3>{frontmatter.description}</h3>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </BackgroundColorLayout>
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`
