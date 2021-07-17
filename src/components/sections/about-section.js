import React from 'react';
import BackgroundColorLayout from '../../layouts/background-color-layout/background-color-layout';
import TextContainerLayout from '../../layouts/text-container-layout/text-container-layout';
import ExternalLink from '../external-link/external-link';

// eslint-disable-next-line react/prop-types
const AboutSection = ({ translate }) => (
  <BackgroundColorLayout altName="profile description" colorName="#FACFAD">
    <h1 style={{ color: '#3E4E50' }}>{`${translate('Hello')}.`}</h1>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        color: '#3E4E50',
      }}
    >
      <TextContainerLayout>
        {translate('i-am-dublin')}
        <ExternalLink url="https://northwestarkansas.org/" text={` ${translate('northwest-arkansas')}`} />
        {' '}
        with my lovely wife Rachel. It's gorgeous here but sometimes we wish we
        were closer to some mountains ⛰️. I write code up the street at
        {' '}
        <ExternalLink url="https://movista.com/" text={` ${translate('movista')}.`} />
      </TextContainerLayout>
      <TextContainerLayout>
        I'm usually juggling a couple personal projects at a time, which you can
        find on
        <ExternalLink url="https://github.com/Danondso/" text={` ${translate('GitHub')}. `} />
        Including a
        <ExternalLink url="https://pedantic-fermat-392953.netlify.com/" text={` ${translate('movie-search-app')} `} />
        and a minimalist
        <ExternalLink url="https://github.com/Danondso/basic-music-player" text={` ${translate('spotify-clone')}. `} />
        Some of my past professional work includes shipping a user management
        system for
        <ExternalLink url="https://apps.apple.com/us/app/fsbp-track-it/id1458886205" text={` ${translate('fsbp-trackit')}.`} />
      </TextContainerLayout>
      <TextContainerLayout>
        When not at the computer I'm usually making/listening/experiencing music
        or exercising. I volunteer some time every month to help others through
        <ExternalLink url="https://askadev.org/" text={` ${translate('askadev')}. `} />
        I also publish some guides (and other stuff) over on
        <ExternalLink url="https://dev.to/danondso" text={` ${translate('dev')}.`} />
      </TextContainerLayout>
    </div>
  </BackgroundColorLayout>
);

export default AboutSection;
