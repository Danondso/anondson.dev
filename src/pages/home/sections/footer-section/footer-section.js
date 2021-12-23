import React from 'react';
import BackgroundColorLayout from '../../../../layouts/background-color-layout/background-color-layout';

const FooterSection = () => (
  <BackgroundColorLayout
    colorName="var(--background-orange)"
    altName="Colored background containing contact and footer info"
  >
    <footer
      style={{ display: 'flex', justifyContent: 'center', color: 'var(--text-color)' }}
    >
      ©
      {' '}
      {new Date().getFullYear()}
      , Made with love.
    </footer>
  </BackgroundColorLayout>
);

export default FooterSection;
