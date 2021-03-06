import React from 'react';
import './external-link.css';

const externalLink = ({ children, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="link">
    {children}
  </a>
);

export default externalLink;
