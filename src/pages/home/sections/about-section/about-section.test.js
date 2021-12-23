import React from 'react';
import renderer from 'react-test-renderer';
import AboutSection from './about-section';

describe('About Section Test Suite', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AboutSection />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
