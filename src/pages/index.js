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
      <div style={{paddingBottom: "3rem", paddingTop: "3rem"}}>
        <ProfileImage />
      </div>
    </BackgroundImageLayout>
    <BackgroundColourLayout altName="profile description" colourName="#355C7D" fontColour="white">
      <div style={{padding: "3rem"}}>
          <section>
            <p>My name is Dublin Anondson and I'm a developer living in Arkansas.</p>
          </section>
      </div>
    </BackgroundColourLayout>
  
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
