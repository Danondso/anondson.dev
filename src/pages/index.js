import React from "react"
import SEO from "../components/seo/seo"
import ContactSection from "../components/sections/contact-section"
import AboutSection from "../components/sections/about-section"
import TitleSection from "../components/sections/title-section"
import Navbar from "../components/sections/navbar/navbar"
import Footer from "../components/sections/footer-section"
import "../components/styles.css"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Navbar />
    <TitleSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </>
)

export default IndexPage
