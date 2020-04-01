import React from "react"

const TextContainer = ({children}) => {
  return (
    <div
      style={{
        padding: "1rem",
        maxWidth: `24rem`,
        fontSize: `1.05rem`,
      }}
    >
      {children}
    </div>
  )
}

export default TextContainer
