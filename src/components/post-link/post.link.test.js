import React from 'react';
import renderer from 'react-test-renderer';
import PostLink from './post-link';

describe('External Link Snapshot test', () => {
  it('renders correctly', () => {
    const postData = {
      frontmatter: {
        path: '/some/path',
        title: 'Fake Title',
      },
    };

    const tree = renderer
      .create(<PostLink backgroundColor="var(--background-green)" key={1235} post={postData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
