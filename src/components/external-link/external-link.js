import React from "react"
import './external-link.css'

export default ({ children, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link"
    >
      {children}
    </a>
  )
}
