import React from "react"
import ProfileImage from "../components/profile-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImageLayout from "../components/background-image-layout"
import BackgroundColourLayout from "../components/background-colour-layout"

const IndexPage = () => (
  <Layout>
    <BackgroundImageLayout>
      <SEO title="Home" />
      <div style={{ paddingBottom: "3rem", paddingTop: "3rem" }}>
        <ProfileImage />
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
          justifyContent: `space-between`
        }}
      >
        <div
          style={{
            padding: "1rem",
            maxWidth: `24rem`,
            fontSize: `1.05rem`,
          }}
        >
          Hello! My name is Dublin Anondson and I'm a developer located in the state of Arkansas.
        </div>
        <div
          style={{
            padding: "1rem",
            maxWidth: `24rem`,
            fontSize: `1.05rem`,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div
          style={{
            padding: "1rem",
            maxWidth: `24rem`,
            fontSize: `1.05rem`,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </section>
    </BackgroundColourLayout>
  </Layout>
)

export default IndexPage
