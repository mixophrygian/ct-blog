import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import assert from "assert";
import Menu from "../../src/components/common/Menu";

// unit tests for the Menu component
describe("Menu component", () => {
  describe("render()", () => {
    it("should render the component", () => {
      const props = {
        login: () => {},
        logout: () => {},
        auth: {
          isAuthenticated: () => true,
        },
      };
      const wrapper = shallow(<Menu {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
