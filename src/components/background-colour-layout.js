import React from "react"

const BackgroundColourLayout = ({
  children,
  colourName,
  altName,
  fontColour,
}) => {
  return (
    <section
      alt={altName}
      style={{
        backgroundColor: colourName,
        color: fontColour,
        boxShadow: `0 3px 2px rgba(0, 0, 0, 0.15)`,
        padding: `4rem`
      }}
    >
      {children}
    </section>
  )
}

export default BackgroundColourLayout
