import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Footer from "../components/sections/footer-section"
import SEO from "../components/seo"
import Navbar from "../components/sections/navbar/navbar"

import "../components/styles.css"

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
      <SEO title="Portfolio" />
      <Navbar />
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
