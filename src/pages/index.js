import React from "react"
import ProfileImage from "../components/profile-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImageLayout from "../components/background-image-layout"
import BackgroundColourLayout from "../components/background-colour-layout"
import TextContainer from "../components/text-container"

const IndexPage = () => (
  <Layout>
    <BackgroundColourLayout
      colourName="#F4C95D"
      altName="Coloured background containing contact and footer info"
      fontColour="#3e4e50"
    >
      <SEO title="Home" />
      <div style={{ paddingBottom: "3rem", paddingTop: "3rem" }}>
        <ProfileImage />
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}
        >
          <h1>Dublin Anondson</h1>
        </div>
      </div>
    </BackgroundColourLayout>
    <BackgroundColourLayout
      altName="profile description"
      colourName="#FACFAD"
      fontColour="#3E4E50"
    >
      <section
        style={{
          display: `flex`,
          flexDirection: `row`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
        }}
      >
        <TextContainer>
          I'm a web developer located in{" "}
          <a
            href="https://northwestarkansas.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: `white`, textDecoration: `none` }}
          >
            Northwest Arkansas
          </a>.{" "} I play several instruments and I like mountains. 
        </TextContainer>
        <TextContainer>
          My skill set includes Spring Boot, Node, Angular, and React, and few other technologies. 
          Some of my projects include a movie search site, a todo list written in Angular. 
          And a stripped down spotify clone. 

          Some of my professional work includes shipping a user management system for a couple of mobile apps. 
          Building IoT integrations for a Fortune 500 transportation company.
        </TextContainer>
        <TextContainer>
          When not at the computer you can find me playing music or video games.
        </TextContainer>
      </section>
    </BackgroundColourLayout>
    <BackgroundColourLayout
      colourName="#DD7230"
      altName="Coloured background containing contact and footer info"
      fontColour="#3E4E50"
    >
      <footer style={{display: "flex", justifyContent: "center"}}>
        © {new Date().getFullYear()}, Made with love by {" "}
         <a
          href="https://github.com/Danondso/"
          style={{ color: `white`, textDecoration: `none` }}
        >
           Dublin Anondson
        </a>
      </footer>
    </BackgroundColourLayout>
  </Layout>
)

export default IndexPage
