import React from 'react';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import Seo from '../components/seo/seo';
import ContactSection from '../components/sections/contact-section';
import AboutSection from '../components/sections/about-section';
import TitleSection from '../components/sections/title-section';
import Navbar from '../components/sections/navbar/navbar';
import Footer from '../components/sections/footer-section';
import '../styles.css';

const IndexPage = () => {
  const translate = useTranslation()[0];
  return (
    <>
      <Seo translate={translate} title={`${translate('Home')}`} />
      <Navbar />
      <TitleSection />
      <AboutSection translate={translate} />
      <ContactSection />
      <Footer />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
