import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import assert from "assert";
import EntryDeletePrompt from "../../src/components/common/EntryDeletePrompt";

// unit tests for the EntryDeletePrompt component
describe("EntryDeletePrompt component", () => {
  describe("render()", () => {
    it("should render the component", () => {
      const props = { show: true, entry: {}, hideDelete: () => {}, entryDelete: () => {} };
      const wrapper = shallow(<EntryDeletePrompt {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
