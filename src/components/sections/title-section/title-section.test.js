import React from 'react';
import renderer from 'react-test-renderer';
import TitleSection from './title-section';

describe('Title Section Test Suite', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TitleSection />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
