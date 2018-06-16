import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import assert from "assert";
import AreYouSurePrompt from "../../src/components/common/AreYouSurePrompt";

// unit tests for the AreYouSurePrompt component
describe("AreYouSurePrompt component", () => {
  describe("render()", () => {
    it("should render the component", () => {
      const props = { show: true, entry: {}, hideDelete: () => {}, entryDelete: () => {} };
      const wrapper = shallow(<AreYouSurePrompt {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
