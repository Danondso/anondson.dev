import React from 'react';
import renderer from 'react-test-renderer';
import ExternalLink from './external-link';

describe('External Link Snapshot Test Suite', () => {
  it('renders correctly with required props', () => {
    const tree = renderer
      .create(
        <ExternalLink url="http://localhost:8080" text="LocalHost" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
