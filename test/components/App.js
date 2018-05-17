import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import assert from "assert";
import { App } from "../../src/components/App";

// unit tests for the App component
describe("App component", () => {
  describe("render()", () => {
    it("should render the component", () => {
      window.scrollTo = () => {};
      const props = { dispatch: () => {}, entries: [] };
      const wrapper = shallow(<App {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
