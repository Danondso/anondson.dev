import React from 'react';
import BackgroundColorLayout from '../../../../layouts/background-color-layout/background-color-layout';
import TextContainerLayout from '../../../../layouts/text-container-layout/text-container-layout';
import ExternalLink from '../../../../components/external-link/external-link';

const AboutSection = () => (
  <BackgroundColorLayout altName="profile description" colorName="var(--background-peach)">
    <h1 style={{ color: 'var(--text-color)' }}>Hello.</h1>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        color: 'var(--text-color)',
      }}
    >
      <TextContainerLayout>
        I&apos;m Dublin Anondson. I&apos;m a developer living in
        <ExternalLink url="https://northwestarkansas.org/" text=" Northwest Arkansas " />
        with my lovely wife Rachel. It&apos;s gorgeous here but sometimes we wish we
        were closer to some mountains ⛰️. I write code up the street at
        <ExternalLink url="https://movista.com/" text=" Movista. " />
      </TextContainerLayout>
      <TextContainerLayout>
        I&apos;m usually juggling a couple personal projects at a time, which you can
        find on
        <ExternalLink url="https://github.com/Danondso/" text=" GitHub. " />
        Some of my past professional work includes shipping a user management
        system for
        <ExternalLink url="https://apps.apple.com/us/app/fsbp-track-it/id1458886205" text=" FSBP TrackIt " />
        and writing some of the core middleware backbone and a couple screens for Movista&apos;s  mobille communication app,
        <ExternalLink url="https://apps.apple.com/us/app/yapp-by-movista/id1529672092" text=" YAPP." />
      </TextContainerLayout>
      <TextContainerLayout>
        When not at the computer I&apos;m usually making/listening/experiencing music
        or exercising. I volunteer some time every month to help others through
        <ExternalLink url="https://askadev.org/" text=" AskADev. " />
        I also publish some guides (and other stuff) over on
        <ExternalLink url="https://dev.to/danondso" text=" dev. " />
      </TextContainerLayout>
    </div>
  </BackgroundColorLayout>
);

export default AboutSection;
