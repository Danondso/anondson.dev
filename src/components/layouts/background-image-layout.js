import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
//Since we can't pass in image names to the graphql queries, we're 
//stuck with hard-coding the value into the query
const BackgroundImageLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "typewriter-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 4200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      Tag="section"
      alt="Photo by Rafaela Biazi on Unsplash"
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{
        boxShadow: `0 3px 2px rgba(0, 0, 0, 0.15)`,
      }}
    >
      {children}
    </BackgroundImage>
  )
}

BackgroundImageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BackgroundImageLayout
