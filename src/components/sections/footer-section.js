import React from 'react';
import BackgroundColorLayout from '../../layouts/background-color-layout/background-color-layout';

const FooterSection = () => (
  <BackgroundColorLayout
    colorName="#DD7230"
    altName="Colored background containing contact and footer info"
  >
    <footer
      style={{ display: 'flex', justifyContent: 'center', color: '#3E4E50' }}
    >
      ©
      {' '}
      {new Date().getFullYear()}
      , Made with love.
    </footer>
  </BackgroundColorLayout>
);

export default FooterSection;
