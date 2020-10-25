import React from "react"
import renderer from "react-test-renderer"
import TextContainerLayout from "./text-container-layout"

describe("TextContainerLayout Snapshot test", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <TextContainerLayout>
          {" "}
          <h1>Whoah ho ho some text</h1>{" "}
        </TextContainerLayout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
