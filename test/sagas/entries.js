import { call, put, select } from 'redux-saga/effects'; // eslint-disable-line no-unused-vars
import assert from 'assert';
import { expect } from "chai";
import { entriesFetchList, entriesAddEdit, entriesDelete, getEntries } from '../../src/sagas/entries';
import ApiEntries from '../../src/api/entries';

// unit tests for the entries saga
describe('Entries saga', () => {
  describe('entriesFetchList()', () => {
    const generator = entriesFetchList();
    let val;

    it('should return the ApiEntries.getEntries call', () => {
      assert.deepEqual(generator.next().value, call(ApiEntries.getEntries));
    });

    it('should return the ENTRIES_LIST_SAVE action', () => {
       val = generator.next();
       expect(val.value).to.include.keys({ "PUT": {type: 'ENTRIES_LIST_SAVE'}});
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });

  describe('entriesAddEdit() - add', () => {
    const action = {
      entry: {},
      callbackSuccess: () => {},
    };
    const generator = entriesAddEdit(action);

    it('should return the ENTRIES_ADD_SAVE action', () => {
      expect(generator.next().value.PUT.action.type).to.equal("ENTRIES_ADD_SAVE");
    });

    it('should retrieve the entries from state', () => {
      assert.deepEqual(generator.next().value, select(getEntries));
    });

    it('should save those entries to localforage', () => {
      assert.deepEqual(generator.next().value, ApiEntries.saveEntries);
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });

  describe('entriesAddEdit() - edit', () => {
    const action = {
      entry: { id: 1 },
      callbackSuccess: () => {},
    };
    const generator = entriesAddEdit(action);

    it('should return the ENTRIES_EDIT_SAVE action', () => {
      const val = generator.next().value;
      expect(val.PUT.action.entry).to.equal(action.entry)
      expect(val.PUT.action.type).to.equal('ENTRIES_EDIT_SAVE');
    });

    it('should retrieve the entries from state', () => {
      assert.deepEqual(generator.next().value, select(getEntries));
    });

    it('should save those entries to localforage', () => {
      assert.deepEqual(generator.next().value, ApiEntries.saveEntries);
    });

    it('should be finished', () => {
      generator.next();
      assert.equal(generator.next().done, true);
    });
  });

  describe('entriesDelete()', () => {
    const action = {
      entry: {id: 1},
    };
    const generator = entriesDelete(action);

     it('should return the ENTRIES_DELETE_SAVE action', () => {
      const val = generator.next().value.PUT.action;
      expect(val.type).to.equal("ENTRIES_DELETE_SAVE");
      expect(val.entry).to.equal(action.entry)
     });

     it('should retrieve the entries from state', () => {
       assert.deepEqual(generator.next().value, select(getEntries));
     });

     it('should save those entries to localforage', () => {
       assert.deepEqual(generator.next().value, ApiEntries.saveEntries);
     });
  });
});
