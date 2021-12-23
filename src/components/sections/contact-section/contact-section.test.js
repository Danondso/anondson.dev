import React from 'react';
import renderer from 'react-test-renderer';
import ContactSection from './contact-section';

describe('Contact Section Test Suite', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ContactSection />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
