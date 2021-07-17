import React from 'react';
import './external-link.css';

const externalLink = ({ text, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="link">
    {text}
  </a>
);

export default externalLink;
