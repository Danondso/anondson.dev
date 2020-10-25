import React from "react"
import { Link } from "gatsby"
import BackgroundColorLayout from "../../layouts/background-color-layout/background-color-layout"
import "../../components/styles.css"

const PostLink = ({ post, backgroundColor }) => (
  <BackgroundColorLayout colorName={backgroundColor}>
    <div
      style={{ display: `flex`, justifyContent: `center`, color: `#3E4E50` }}
    >
      <Link to={post.frontmatter.path} style={{ color: `#FFF` }}>
        <h1>{post.frontmatter.title}</h1>
      </Link>
    </div>
  </BackgroundColorLayout>
)

export default PostLink
