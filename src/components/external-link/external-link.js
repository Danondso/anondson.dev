import React from 'react';
import PropTypes from 'prop-types';
import './external-link.css';

const ExternalLink = ({ text = '', url = '' }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="link">
    {text}
  </a>
);

ExternalLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ExternalLink;
