import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import assert from "assert";
import { EntryList } from "../../src/components/common/EntryList";

// unit tests for the EntryList component
describe("EntryList component", () => {
  describe("render()", () => {
    it("should render the progressbar", () => {
      const props = { history: {}, entries: [] };
      const wrapper = shallow(<EntryList {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
