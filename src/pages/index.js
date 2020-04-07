import React from "react"
import ProfileImage from "../components/profile-image"
import BackgroundColorLayout from "../components/layouts/background-color-layout"
import TextContainerLayout from "../components/layouts/text-container-layout"
import ExternalLink from "../components/external-link"
import Footer from "../components/external-link"
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
          <h1 style={{ color: "#3E4E50" }}>Dublin Anondson</h1>
        </div>
      </div>
    </BackgroundColorLayout>
    <BackgroundColorLayout
      altName="profile description"
      colorName="#FACFAD"
      fontcolor="#3E4E50"
    >
      <h1 style={{ color: "#3E4E50" }}>Hello.</h1>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          color: "#3E4E50",
        }}
      >
        <TextContainerLayout>
          I'm Dublin Anondson. I'm a developer living in{" "}
          <ExternalLink url="https://northwestarkansas.org/">
            Northwest Arkansas
          </ExternalLink>{" "}
          with my lovely wife Rachel. It's gorgeous here but sometimes we wish
          we were closer to some mountains ⛰️. I write code up the street at{" "}
          <ExternalLink url="https://movista.com/">Movista.</ExternalLink>
        </TextContainerLayout>
        <TextContainerLayout>
          I'm usually juggling a couple personal projects at a time, which you
          can find on
          <ExternalLink url="https://github.com/Danondso/">
            {" "}
            GitHub.{"  "}
          </ExternalLink>
          Including a
          <ExternalLink url="https://pedantic-fermat-392953.netlify.com/">
            {" "}
            movie search app{"  "}
          </ExternalLink>
          and a minimalist
          <ExternalLink url="https://github.com/Danondso/basic-music-player">
            {" "}
            spotify clone.{"  "}
          </ExternalLink>
          Some of my past professional work includes shipping a user management
          system for
          <ExternalLink url="https://apps.apple.com/us/app/fsbp-track-it/id1458886205">
            {" "}
            FSBP TrackIt.
          </ExternalLink>
        </TextContainerLayout>
        <TextContainerLayout>
          When not at the computer I'm usually making/listening/experiencing
          music or exercising. I volunteer some time every month to help others
          through
          <ExternalLink url="https://askadev.org/">
            {" "}
            AskADev. {"  "}
          </ExternalLink>
          I also publish some guides (and other stuff) over on
          <ExternalLink url="https://dev.to/danondso"> dev.</ExternalLink>
        </TextContainerLayout>
      </div>
    </BackgroundColorLayout>
    <BackgroundColorLayout colorName="#8FA998" fontColor="#3E4E50">
      <h1>Let's get in touch.</h1>
      <TextContainerLayout>
        Drop me a line{" "}
        <ExternalLink url="mailto:dublin@anondson@gmail.com">
          here.
        </ExternalLink>
        If social media is your thing my twitter handle is
        <ExternalLink url="https://twitter.com/dublin_anondson">
          {" "}
          @dublin_anondson.
        </ExternalLink>
        And if you want to get really professional about it here's my
        <ExternalLink url="https://www.linkedin.com/in/dublin-anondson-4b562793/">
          {" "}
          LinkedIn{" "}
        </ExternalLink>
        as well.
      </TextContainerLayout>
    </BackgroundColorLayout>
    <BackgroundColorLayout
      colorName="#DD7230"
      altName="Colored background containing contact and footer info"
      fontcolor="#3E4E50"
    >
      <Footer />
    </BackgroundColorLayout>
  </>
)

export default IndexPage
