import React from "react"
import BackgroundColorLayout from "../layouts/background-color-layout"
import TextContainerLayout from "../layouts/text-container-layout"
import ExternalLink from "../external-link"

const AboutSection = () => (
  <BackgroundColorLayout
    altName="profile description"
    colorName="#FACFAD"
  >
    <h1 style={{ color: `#3E4E50` }}>Hello.</h1>
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        color: `#3E4E50`,
      }}
    >
      <TextContainerLayout>
        I'm Dublin Anondson. I'm a developer living in{" "}
        <ExternalLink url="https://northwestarkansas.org/">
          Northwest Arkansas
        </ExternalLink>{" "}
        with my lovely wife Rachel. It's gorgeous here but sometimes we wish we
        were closer to some mountains ⛰️. I write code up the street at{" "}
        <ExternalLink url="https://movista.com/">Movista.</ExternalLink>
      </TextContainerLayout>
      <TextContainerLayout>
        I'm usually juggling a couple personal projects at a time, which you can
        find on
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
        When not at the computer I'm usually making/listening/experiencing music
        or exercising. I volunteer some time every month to help others through
        <ExternalLink url="https://askadev.org/"> AskADev. {"  "}</ExternalLink>
        I also publish some guides (and other stuff) over on
        <ExternalLink url="https://dev.to/danondso"> dev.</ExternalLink>
      </TextContainerLayout>
    </div>
  </BackgroundColorLayout>
)

export default AboutSection
