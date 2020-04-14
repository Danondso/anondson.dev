import React from "react"
import BackgroundColorLayout from "../layouts/background-color-layout"
import ProfileImage from "../profile-image"

const TitleSection = () => (
  <BackgroundColorLayout
    colorName="#F4C95D"
    altName="Colored background containing contact and footer info"
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
)

export default TitleSection
