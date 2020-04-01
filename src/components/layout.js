/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import BackgroundColourLayout from "../components/background-colour-layout"
//import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div
        style={{
          maxWidth: "100%",
        }}
      >
        <main>{children}</main>
        <BackgroundColourLayout
          colourName="#C06C84"
          altName="Coloured background containing contact and footer info"
          fontColour="white"
        >
          <footer>
            <div
              style={{
                justifyContent: `center`,
              }}
            >
              © {new Date().getFullYear()}, Made with love by
              {` `}
              <a
                href="https://github.com/Danondso/"
                style={{ color: `white`, textDecoration: `none` }}
              >
                Dublin Anondson
              </a>
            </div>
          </footer>
        </BackgroundColourLayout>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
