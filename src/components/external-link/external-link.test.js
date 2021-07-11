import React from 'react';
import renderer from 'react-test-renderer';
import ExternalLink from './external-link';

describe('External Link Snapshot test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ExternalLink url="http://localhost:8080"> LocalHost </ExternalLink>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
