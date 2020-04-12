import React from "react"
import { Link } from "gatsby"
import BackgroundColorLayout from "./layouts/background-color-layout"
import "../components/styles.css"

const PostLink = ({ post, backgroundColor }) => (
  <BackgroundColorLayout colorName={backgroundColor} fontColor="#3E4E50">
    <div
      style={{ display: "flex", justifyContent: "center", color: "#3E4E50" }}
    >
      <Link to={post.frontmatter.path}><h1>{post.frontmatter.title}</h1></Link>
      <h3>{post.frontmatter.description}</h3>
    </div>
  </BackgroundColorLayout>
)

export default PostLink
