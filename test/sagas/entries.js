import { call, put } from 'redux-saga/effects'; // eslint-disable-line no-unused-vars
import assert from 'assert';
import { entriesFetchList, entriesAddEdit, entriesDelete } from '../../src/sagas/entries';
import ApiEntries from '../../src/api/entries';

// unit tests for the entries saga
describe('Entries saga', () => {
  describe('entriesFetchList()', () => {
    const generator = entriesFetchList();

    it('should return the ApiEntries.getList call', () => {
      assert.deepEqual(generator.next().value, call(ApiEntries.getList));
    });

    // it('should return the ENTRIES_LIST_SAVE action', () => {
    //   assert.deepEqual(generator.next().value, put({ type: 'ENTRIES_LIST_SAVE', entries: {}}));
    // });

    it('should be finished', () => {
      generator.next();
      assert.equal(generator.next().done, true);
    });
  });

  xdescribe('entriesAddEdit() - add', () => {
    const action = {
      entry: {},
      callbackSuccess: () => {},
    };
    const generator = entriesAddEdit(action);

    it('should return the ApiEntries.addEdit call', () => {
      assert.deepEqual(generator.next().value, call(ApiEntries.addEdit));
    });

    // it('should return the ENTRIES_ADD_SAVE action', () => {
    //   assert.deepEqual(generator.next().value, put({
    //     type: 'ENTRIES_ADD_SAVE',
    //     entry: action.entry,
    //   }));
    // });

    it('should be finished', () => {
      generator.next();
      assert.equal(generator.next().done, true);
    });
  });

  describe('entriesAddEdit() - edit', () => {
    const action = {
      entry: { id: 1 },
      callbackSuccess: () => {},
    };
    const generator = entriesAddEdit(action);

    xit('should return the ApiEntries.addEdit call', () => {
      assert.deepEqual(generator.next().value, call(ApiEntries.addEdit));
    });

    // it('should return the ENTRIES_EDIT_SAVE action', () => {
    //   assert.deepEqual(generator.next().value, put({
    //     type: 'ENTRIES_EDIT_SAVE',
    //     entry: action.entry,
    //   }));
    // });

    xit('should be finished', () => {
      generator.next();
      assert.equal(generator.next().done, true);
    });
  });

  describe('entriesDelete()', () => {
    const action = {
      entry: {id: 1},
    };
    const generator = entriesDelete(action);

    xit('should return the ApiEntries.delete call', () => {
      assert.deepEqual(generator.next().value, call(ApiEntries.delete));
    });

    // it('should return the ENTRIES_DELETE_SAVE action', () => {
    //   assert.deepEqual(generator.next().value, put({
    //     type: 'ENTRIES_DELETE_SAVE',
    //     entry: action.entry,
    //   }));
    // });

    xit('should be finished', () => {
      generator.next();
      assert.equal(generator.next().done, true);
    });
  });
});
