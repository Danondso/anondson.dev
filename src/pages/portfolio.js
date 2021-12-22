import React from 'react';
import { graphql } from 'gatsby';
import PostLink from '../components/post-link/post-link';
import Footer from '../components/sections/footer-section';
import Seo from '../components/seo/seo';
import Navbar from '../components/sections/navbar/navbar';

import '../components/styles.css';
import BackgroundColorLayout from '../layouts/background-color-layout/background-color-layout';

const PortfolioPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => (
      <PostLink backgroundColor="var(--background-green)" key={edge.node.id} post={edge.node} />
    ));
  return (
    <>
      <Seo title="Portfolio" />
      <Navbar />
      <BackgroundColorLayout
        colorName="var(--background-yellow)"
        altName="Colored background containing contact and footer info"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            color: 'var(--text-color)',
          }}
        >
          <h1>Portfolio</h1>
        </div>
      </BackgroundColorLayout>
      {Posts}
      <Footer />
    </>
  );
};

export default PortfolioPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
          }
        }
      }
    }
  }
`;
