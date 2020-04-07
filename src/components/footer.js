import React from "react"

export default () => {
  return (
    <footer
      style={{ display: "flex", justifyContent: "center", color: "#3E4E50" }}
    >
      © {new Date().getFullYear()}, Made with love.
    </footer>
  )
}
