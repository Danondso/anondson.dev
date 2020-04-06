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
          <a
            href="https://northwestarkansas.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Northwest Arkansas
          </a>{" "}
          with my lovely wife Rachel. It's gorgeous here but sometimes we wish
          we were closer to some mountains ⛰️. I write code up the street at{" "}
          <a
            href="https://movista.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Movista.
          </a>
        </TextContainerLayout>
        <TextContainerLayout>
          I'm usually juggling a couple personal projects at a time, which you
          can find on
          <a
            href="https://github.com/Danondso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub.{"  "}
          </a>
          Including a
          <a
            href="https://pedantic-fermat-392953.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            movie search app{"  "}
          </a>
          and a minimalist
          <a
            href="https://github.com/Danondso/basic-music-player"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            spotify clone.{"  "}
          </a>
          Some of my past professional work includes shipping a user management
          system for
          <a
            href="https://apps.apple.com/us/app/fsbp-track-it/id1458886205"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            FSBP TrackIt.
          </a>
        </TextContainerLayout>
        <TextContainerLayout>
          When not at the computer I'm usually making/listening/experiencing
          music or exercising. I volunteer some time every month to help others
          through{" "}
          <a
            href="https://askadev.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AskADev. {"  "}
          </a>{" "}
          I also publish some guides (and other stuff) over on
          <a
            href="https://dev.to/danondso"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            dev.
          </a>
        </TextContainerLayout>
      </div>
    </BackgroundColorLayout>
    <BackgroundColorLayout colorName="#8FA998" fontColor="#3E4E50">
      <h1>Let's get in touch.</h1>
      <TextContainerLayout>
        Drop me a line <a href="mailto:dublin@anondson@gmail.com">here.</a> If
        social media is your thing my twitter handle is{" "}
        <a
          href="https://twitter.com/dublin_anondson"
          target="_blank"
          rel="noopener noreferrer"
        >
          @dublin_anondson.
        </a>{" "}
        And if you want to get really professional about here's my
        <a
          href="https://www.linkedin.com/in/dublin-anondson-4b562793/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          LinkedIn {"  "}
        </a>
        as well.
      </TextContainerLayout>
    </BackgroundColorLayout>
    <BackgroundColorLayout
      colorName="#DD7230"
      altName="Colored background containing contact and footer info"
      fontcolor="#3E4E50"
    >
      <footer
        style={{ display: "flex", justifyContent: "center", color: "#3E4E50" }}
      >
        © {new Date().getFullYear()}, Made with love.
      </footer>
    </BackgroundColorLayout>
  </>
)

export default IndexPage
