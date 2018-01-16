import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import { Home } from '../../src/components/Home';

// unit tests for the Home component
describe('Home component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Home />);
      assert.equal(wrapper.length, 1);
    });
  });
  describe('Splash page', () => {
    it("should show the splash page when there are no entries", () => {
      /*
      const props = {
        entries: [1, 2, 3],
      };
      const wrapper = shallow(<Home {...props} />)
      */
    })
  })
});
