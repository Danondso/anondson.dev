import React from "react"
import { Link } from "gatsby"
import BackgroundColorLayout from "../../background-color-layout"
import "./navbar.css"
const isActive = ({ isCurrent }) => {
  console.log(isCurrent)
  return isCurrent ? { className: "active" } : { className: "inactive" }
}

export default () => {
  return (
    <BackgroundColorLayout
      colorName="#F4C95D"
      altName="Colored background containing contact and footer info"
      fontcolor="#3E4E50"
    >
      <nav style={{ float: "right", marginTop: "-1rem" }}>
        <Link to="/" getProps={isActive}>
          Home
        </Link>
        <Link to="/portfolio" getProps={isActive}>
          Portfolio
        </Link>
      </nav>
    </BackgroundColorLayout>
  )
}
