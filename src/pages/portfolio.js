import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link/post-link"
import Footer from "../components/sections/footer-section"
import Seo from "../components/seo/seo"
import Navbar from "../components/sections/navbar/navbar"

import "../components/styles.css"
import BackgroundColorLayout from "../layouts/background-color-layout/background-color-layout"

const PortfolioPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <PostLink backgroundColor="#8FA998" key={edge.node.id} post={edge.node} />
    ))
  return (
    <>
      <Seo title="Portfolio" />
      <Navbar />
      <BackgroundColorLayout
        colorName="#F4C95D"
        altName="Colored background containing contact and footer info"
      >
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
            color: `#3E4E50`,
          }}
        >
          <h1>Portfolio</h1>
        </div>
      </BackgroundColorLayout>
      {Posts}
      <Footer />
    </>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
          }
        }
      }
    }
  }
`
