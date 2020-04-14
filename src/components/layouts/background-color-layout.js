import React from "react"
import PropTypes from "prop-types"

const BackgroundColorLayout = ({ children, colorName, altName }) => {
  return (
    <section
      alt={altName}
      style={{
        backgroundColor: colorName,
        boxShadow: `0 3px 2px rgba(0, 0, 0, 0.15)`,
        padding: `4rem`,
      }}
    >
      {children}
    </section>
  )
}

BackgroundColorLayout.defaultProps = {
  children: <p>Color Layout Works!</p>,
  colorName: `#FFFFFF`,
  altName: `A default setup for a colored background section.`,
}

BackgroundColorLayout.propTypes = {
  children: PropTypes.node.isRequired,
  colorName: PropTypes.string,
  altName: PropTypes.string,
}

export default BackgroundColorLayout
