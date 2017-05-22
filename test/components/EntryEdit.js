import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import { EntryEdit } from '../../src/components/EntryEdit';

// unit tests for the EntryEdit component
describe('EntryEdit component', () => {
  describe('render()', () => {
    it('should render the add entry form', () => {
      const props = { entry: {}, handleSubmit: () => {} };
      const wrapper = shallow(<EntryEdit {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
