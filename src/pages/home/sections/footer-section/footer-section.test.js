import React from 'react';
import renderer from 'react-test-renderer';
import FooterSection from './footer-section';

describe('Footer Section Test Suite', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FooterSection />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
