import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from './navbar';

describe('navbar Test Suite', () => {
  it('renders correctly with required props', () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
