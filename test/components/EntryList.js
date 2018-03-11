import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { EntryList } from "../../src/components/common/EntryList";

// unit tests for the EntryList component
describe("EntryList component", () => {
  describe("render()", () => {
    it("should render the progressbar", () => {
      const props = { entries: [] };
      const wrapper = shallow(<EntryList {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
