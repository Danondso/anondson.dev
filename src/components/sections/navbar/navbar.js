import React from 'react';
import { Link } from 'gatsby';
import BackgroundColorLayout from '../../../layouts/background-color-layout/background-color-layout';
import './navbar.css';

const isActive = ({ isCurrent }) => {
  console.log(isCurrent);
  return isCurrent ? { className: 'active' } : { className: 'inactive' };
};

const NavBar = () => (
  <BackgroundColorLayout
    colorName="#F4C95D"
    altName="Colored background containing contact and footer info"
  >
    <nav style={{ float: 'right', marginTop: '-1rem' }}>
      <Link to="/" getProps={isActive}>
        Home
      </Link>
    </nav>
  </BackgroundColorLayout>
);

export default NavBar;
