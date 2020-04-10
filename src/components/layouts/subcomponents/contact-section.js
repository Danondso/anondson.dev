import React from "react"
import BackgroundColorLayout from "../background-color-layout"
import TextContainerLayout from "../text-container-layout"
import ExternalLink from "../../external-link"

const ContactSection = () => (
  <BackgroundColorLayout colorName="#8FA998" fontColor="#3E4E50">
    <h1>Let's get in touch.</h1>
    <TextContainerLayout>
      Drop me a line{" "}
      <ExternalLink url="mailto:dublin@anondson@gmail.com">here.</ExternalLink>
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
)

export default ContactSection
