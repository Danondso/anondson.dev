import React from 'react';
import { useStaticQuery } from 'gatsby';
import renderer from 'react-test-renderer';
import SEO from './seo';

describe('SEO Test Suite', () => {
  it('renders correctly', () => {
    useStaticQuery.mockReturnValueOnce({
      site: {
        siteMetadata: {
          description: 'A Site Description For A Test',
        },
      },
    });
    const tree = renderer.create(<SEO title="Test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
