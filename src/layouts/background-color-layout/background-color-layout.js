import React from 'react';
import PropTypes from 'prop-types';

const BackgroundColorLayout = ({ children, colorName, altName }) => (
  <section
    alt={altName}
    style={{
      backgroundColor: colorName,
      boxShadow: '0 3px 2px rgba(0, 0, 0, 0.15)',
      padding: '4rem',
    }}
  >
    {children}
  </section>
);

BackgroundColorLayout.defaultProps = {
  colorName: 'var(--white)',
};

BackgroundColorLayout.propTypes = {
  children: PropTypes.node.isRequired,
  colorName: PropTypes.string,
  altName: PropTypes.string.isRequired,
};

export default BackgroundColorLayout;
