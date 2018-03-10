//import assert from 'assert';
/* eslint-disable no-console */
import { expect } from "chai";
import sinon from 'sinon';
import localforage from "localforage";
import appState from '../../src/api/appState';

let store;
describe("appState", () => {
   beforeEach(() => {
       store = {onboarded: false};
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
       expect(onboardedState).to.be.false;
     }).catch((err) => {
       console.log(err);
       return err;
     });
   });
});

describe('markAsOnboarded()', () => {
   it('should mark onboarded as \'true\'', () => {
     appState.markAsOnboarded().then(onboardedState => {
       expect(onboardedState).to.be.true
     }).catch((err) => {
       console.log(err);
       return err;
     });
   });
 });
});