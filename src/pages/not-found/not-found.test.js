/* eslint-disable max-len */
import React from 'react';
import { useStaticQuery } from 'gatsby';
import renderer from 'react-test-renderer';
import NotFound from './not-found';

describe('Profile Image Snapshot test', () => {
  useStaticQuery.mockReturnValueOnce({
    site: {
      siteMetadata: {
        description: 'A Site Description For A Test',
      },
    },
  });
  it('renders correctly', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
