import React from 'react';
import { Link } from 'gatsby';
import BackgroundColorLayout from '../../layouts/background-color-layout/background-color-layout';
import '../styles.css';

const PostLink = ({ post, backgroundColor }) => (
  <BackgroundColorLayout colorName={backgroundColor}>
    <div
      style={{ display: 'flex', justifyContent: 'center', color: 'var(--text-color)' }}
    >
      <Link to={post.frontmatter.path} style={{ color: 'var(--white)' }}>
        <h1>{post.frontmatter.title}</h1>
      </Link>
    </div>
  </BackgroundColorLayout>
);

export default PostLink;
