import React from "react"

export default ({ children, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: `white`, textDecoration: `none` }}
    >
      {children}
    </a>
  )
}
