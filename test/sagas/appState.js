import { call, put, select } from 'redux-saga/effects'; // eslint-disable-line no-unused-vars
import assert from 'assert';
import { expect } from "chai";
import { checkIfOnboarded, markAsOnboarded } from '../../src/sagas/appState';
import appState from '../../src/api/appState';

describe('AppState saga', () => {
  describe('checkIfOnboarded()', () => {
    const generator = checkIfOnboarded();
    let val;

    it('should return the appState.checkIfOnboarded call', () => {
      assert.deepEqual(generator.next().value, call(appState.checkIfOnboarded));
    });

    it('should return the UPDATE_ONBOARDING_STATE action', () => {
       val = generator.next();
       expect(val.value.PUT.action.type).to.equal('UPDATE_ONBOARDING_STATE');
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });

  describe('markAsOnboarded()', () => {
    const generator = markAsOnboarded();
    let val;

    it('should return the appState.markAsOnboarded call', () => {
      assert.deepEqual(generator.next().value, call(appState.markAsOnboarded));
    });

    it('should return the UPDATE_ONBOARDING_STATE action', () => {
       val = generator.next();
       expect(val.value.PUT.action.type).to.equal('UPDATE_ONBOARDING_STATE');
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
   });
});
