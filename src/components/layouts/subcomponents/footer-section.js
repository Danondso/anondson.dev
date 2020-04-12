import React from "react"
import BackgroundColorLayout from "../background-color-layout"

export default () => {
  return (
    <BackgroundColorLayout
      colorName="#DD7230"
      altName="Colored background containing contact and footer info"
      fontcolor="#3E4E50"
    >
      <footer
        style={{ display: "flex", justifyContent: "center", color: "#3E4E50" }}
      >
        © {new Date().getFullYear()}, Made with love.
      </footer>
    </BackgroundColorLayout>
  )
}