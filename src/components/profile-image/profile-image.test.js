/* eslint-disable max-len */
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery } from 'gatsby';
import ProfileImage from './profile-image';
import imageProfileData from '../../../__mocks__/payloads/image-profile-data';

describe('Profile Image Snapshot test', () => {
  it('renders correctly', () => {
    useStaticQuery.mockReturnValue(imageProfileData);
    const tree = renderer.create(<ProfileImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
