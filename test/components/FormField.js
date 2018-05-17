import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import assert from "assert";
import FormField from "../../src/components/common/FormField";

// unit tests for the FormField component
describe("FormField component", () => {
  describe("render()", () => {
    it("should render the component", () => {
      const wrapper = shallow(<FormField />);
      assert.equal(wrapper.length, 1);
    });
  });
});
