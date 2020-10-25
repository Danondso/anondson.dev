import React from "react"
import renderer from "react-test-renderer"
import BackgroundColorLayout from "./background-color-layout"

describe("BackgroundColorLayout Snapshot test", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BackgroundColorLayout
          colorName="#000000"
          altName="Test Background Section"
        >
          {" "}
          <h1>Hello</h1>{" "}
        </BackgroundColorLayout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
