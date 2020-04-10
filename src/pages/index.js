import React from "react"
import Footer from "../components/layouts/subcomponents/footer-section"
import SEO from "../components/seo"
import "../components/styles.css"
import ContactSection from "../components/layouts/subcomponents/contact-section"
import AboutSection from "../components/layouts/subcomponents/about-section"
import TitleSection from "../components/layouts/subcomponents/title-section"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <TitleSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </>
)

export default IndexPage
