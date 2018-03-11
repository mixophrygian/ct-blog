import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import SingleEntryRow from "../../src/components/common/SingleEntryRow";

// unit tests for the SingleEntryRow component
describe("SingleEntryRow component", () => {
  describe("render()", () => {
    it("should render the component", () => {
      const props = { entry: {}, showDelete: () => {} };
      const wrapper = shallow(<SingleEntryRow {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
