import React from "react"

const BackgroundColourLayout = ({ children, colourName, altName, fontColour }) => {
  return (
    <section
      alt={altName}
      style={{backgroundColor: colourName, color: fontColour}}
    >
      {children}
    </section>
  )
}


export default BackgroundColourLayout
