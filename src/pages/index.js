import React from "react"
import ProfileImage from "../components/profile-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImageLayout from "../components/background-image-layout"
import BackgroundColourLayout from "../components/background-colour-layout"
import TextContainer from "../components/text-container"

const IndexPage = () => (
  <Layout>
    <BackgroundImageLayout>
      <SEO title="Home" />
      <div style={{ paddingBottom: "3rem", paddingTop: "3rem" }}>
        <ProfileImage />
        <TextContainer>
          <div style={{ color: `white`, margin: `0 auto` }}>Dublin Anondson</div>
        </TextContainer>
      </div>
    </BackgroundImageLayout>
    <BackgroundColourLayout
      altName="profile description"
      colourName="#355C7D"
      fontColour="white"
    >
      <section
        style={{
          display: `flex`,
          flexDirection: `row`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
        }}
      >
        <TextContainer></TextContainer>
        <TextContainer></TextContainer>
        <TextContainer>
          When not at the computer you can find me playing music or video games.
        </TextContainer>
      </section>
    </BackgroundColourLayout>
  </Layout>
)

export default IndexPage
