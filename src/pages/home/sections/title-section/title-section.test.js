import React from 'react';
import { useStaticQuery } from 'gatsby';
import renderer from 'react-test-renderer';
import TitleSection from './title-section';
import imageProfileData from '../../../../../__mocks__/payloads/image-profile-data';

describe('Title Section Test Suite', () => {
  it('renders correctly', () => {
    useStaticQuery.mockReturnValueOnce(imageProfileData);
    const tree = renderer.create(<TitleSection />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
