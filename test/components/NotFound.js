import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import assert from "assert";
import NotFound from "../../src/components/NotFound";

// unit tests for the NotFound component
describe("NotFound component", () => {
  describe("render()", () => {
    it("should render the component", () => {
      const wrapper = shallow(<NotFound />);
      assert.equal(wrapper.length, 1);
    });
  });
});
