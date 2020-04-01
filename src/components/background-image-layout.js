import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

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

export default BackgroundImageLayout
