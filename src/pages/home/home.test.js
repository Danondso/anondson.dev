import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery } from 'gatsby';
import Home from './home';
import imageProfileData from '../../../__mocks__/payloads/image-profile-data';

describe('Home Page Test Suite', () => {
  it('renders correctly', () => {
    useStaticQuery.mockReturnValueOnce({
      site: {
        siteMetadata: {
          description: 'A Site Description For A Test',
        },
      },
    });
    useStaticQuery.mockReturnValueOnce(imageProfileData);
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
