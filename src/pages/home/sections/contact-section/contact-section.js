import React from 'react';
import BackgroundColorLayout from '../../../../layouts/background-color-layout/background-color-layout';
import TextContainerLayout from '../../../../layouts/text-container-layout/text-container-layout';
import ExternalLink from '../../../../components/external-link/external-link';

const ContactSection = () => (
  <BackgroundColorLayout colorName="var(--background-green)" altName="Contact Section of anondson.dev">
    <h1>Let&apos;s get in touch.</h1>
    <TextContainerLayout>
      Drop me a line
      {' '}
      <ExternalLink url="mailto:dublin@anondson@gmail.com" text=" here. " />
      If you want to get really professional about it here&apos;s my
      <ExternalLink url="https://www.linkedin.com/in/dublin-anondson-4b562793/" text=" LinkedIn." />
    </TextContainerLayout>
  </BackgroundColorLayout>
);

export default ContactSection;
