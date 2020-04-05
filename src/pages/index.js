import React from "react"
import ProfileImage from "../components/profile-image"
import BackgroundColorLayout from "../components/layouts/background-color-layout"
import TextContainerLayout from "../components/layouts/text-container-layout"
import SEO from "../components/seo"
import "../components/styles.css"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <BackgroundColorLayout
      colorName="#F4C95D"
      altName="Colored background containing contact and footer info"
      fontcolor="#3E4E50"
    >
      <div style={{ paddingBottom: "3rem", paddingTop: "3rem" }}>
        <ProfileImage />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          <h1 style={{color: "#3E4E50"}}>Dublin Anondson</h1>
        </div>
      </div>
    </BackgroundColorLayout>
    <BackgroundColorLayout
      altName="profile description"
      colorName="#FACFAD"
      fontcolor="#3E4E50"
    >
        <h1 style={{color: "#3E4E50"}}>About.</h1>
        <div
          style={{
            display: `flex`,
            flexDirection: `row`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            color: "#3E4E50"
          }}
        >
          <TextContainerLayout>
            I'm a web developer located in{" "}
            <a
              href="https://northwestarkansas.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `white`, textDecoration: `none` }}
            >
              Northwest Arkansas
            </a>
            . I play several instruments and I like mountains.
          </TextContainerLayout>
          <TextContainerLayout>
            My skill set includes Spring Boot, Node, Angular, and React, and few
            other technologies. Some of my projects include a movie search site,
            a todo list written in Angular. And a stripped down spotify clone.
            Some of my professional work includes shipping a user management
            system for a couple of mobile apps. Building IoT integrations for a
            Fortune 500 transportation company.
          </TextContainerLayout>
          <TextContainerLayout>
            When not at the computer you can find me playing music or video
            games.
          </TextContainerLayout>
        </div>
    </BackgroundColorLayout>
    <BackgroundColorLayout colorName="#8FA998" fontColor="#3E4E50">
      <h1>Let's get in touch.</h1>
      <TextContainerLayout>
        You can message me{" "}
        <a
          href="mailto:dublin@anondson@gmail.com"
          style={{ color: `white`, textDecoration: `none` }}
        >
          here.
        </a> If social media is your thing my twitter handle is <a
          href="https://twitter.com/dublin_anondson"
          style={{ color: `white`, textDecoration: `none` }}
        >
          @dublin_anondson
        </a>
      </TextContainerLayout>
    </BackgroundColorLayout>
    <BackgroundColorLayout
      colorName="#DD7230"
      altName="Colored background containing contact and footer info"
      fontcolor="#3E4E50"
    >
      <footer style={{ display: "flex", justifyContent: "center" }}>
        © {new Date().getFullYear()}, Made with love by{" "}
        <a
          href="https://github.com/Danondso/"
          style={{ color: `white`, textDecoration: `none` }}
        >
          Dublin Anondson
        </a>
      </footer>
    </BackgroundColorLayout>
  </>
)

export default IndexPage
