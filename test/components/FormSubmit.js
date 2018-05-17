import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import assert from "assert";
import FormSubmit from "../../src/components/common/FormSubmit";

// unit tests for the FormSubmit component
describe("FormSubmit component", () => {
  describe("render()", () => {
    it("should render the component", () => {
      const wrapper = shallow(<FormSubmit />);
      assert.equal(wrapper.length, 1);
    });
  });
});
