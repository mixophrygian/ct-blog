//import assert from 'assert';
import { expect } from "chai";
import sinon from 'sinon';
import localforage from "localforage";
import appState from '../../src/api/appState';

let store;
describe("appState", () => {
   beforeEach(() => {
       store = {};
       sinon.stub(localforage, 'setItem').callsFake((key, value) => {
         store[key] = value;
         return Promise.resolve(store[key]);
       });
       sinon.stub(localforage, 'getItem').callsFake((key) => {
         return Promise.resolve(store[key])
       });
     });
    afterEach(() => {
      localforage.getItem.restore();
      localforage.setItem.restore();
    });

 describe('checkIfOnboarded()', () => {
   it('should initialize with false - the user has not been onboarded', () => {
     appState.checkIfOnboarded().then(onboardedState => {
       expect(onboardedState).toBe({ onboarded: 7 });
     }).catch((err) => {
       expect(!err);
       return err;
     });
   });
});

describe('markAsOnboarded()', () => {
   it('should mark onboarded as \'true\'', () => {
     appState.markAsOnboarded().then(onboardedState => {
       expect(onboardedState).toBe({ onboarded: 1})
     }).catch((err) => err);
   });
 });

});