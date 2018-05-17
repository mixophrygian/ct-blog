import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import assert from "assert";
import SingleEntryRow from "../../src/components/common/SingleEntryRow";

// unit tests for the SingleEntryRow component
describe("SingleEntryRow component", () => {
  describe("render()", () => {
    it("should render the component", () => {
      const props = { history: {}, entry: {}, showDelete: () => {} };
      const wrapper = shallow(<SingleEntryRow {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
