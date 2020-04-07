import React from "react"
import PropTypes from "prop-types"


const TextContainerLayout = ({children}) => {
  return (
    <section
      style={{
        padding: "1rem",
        maxWidth: `24rem`,
        fontSize: `1.05rem`,
      }}
    >
      {children}
    </section>
  )
}

TextContainerLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TextContainerLayout
