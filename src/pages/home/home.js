import React from 'react';
import Seo from '../../components/seo/seo';
import ContactSection from './sections/contact-section/contact-section';
import AboutSection from './sections/about-section/about-section';
import TitleSection from './sections/title-section/title-section';
import Navbar from '../../components/navbar/navbar';
import Footer from './sections/footer-section/footer-section';

const Home = () => (
  <>
    <Seo title="Home" />
    <Navbar />
    <TitleSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </>
);

export default Home;
