//import assert from 'assert';
import { expect } from "chai";
import sinon from 'sinon';
import localforage from "localforage";
import ApiEntries from '../../src/api/entries';

let boilerplateEntry;
let store;
describe("Entries API", () => {
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
    })
  boilerplateEntry = {
     id: 1,
     date: new Date(),
     situation: "I\'m worried about an event that occurred",
     emotionalResponse: 'This event made me feel sad and stupid',
     automaticThoughts: 'I\'m always doing stupid things, I\'ll never improve',
     cognitiveDistortions: ['allOrNothingThinking', 'overgeneralization'],
     rationalResponse: 'Everybody feels stupid sometimes, I can improve',
   }

   const uniqueEntry = {
     id: 123,
     date: new Date(),
     situation: "A unique entry situation ",
     emotionalResponse: "A unique emotional response",
     automaticThoughts: "Unique automatic thoughts",
     cognitiveDistortions: ['emotionalReasoning', 'jumpingToConclusions'],
     rationalResponse: "A unique rational response",
   }
 describe('getEntries()', () => {
   it('should create a boilerplate list of entries if none are present', () => {
     boilerplateEntry;
     ApiEntries.getEntries().then(data => {
       const resultEntry = data[0];
       const date = new Date();
       const day = resultEntry.date.getDate();
       const month = resultEntry.date.getMonth() + 1;
       const year = resultEntry.date.getFullYear();
       //TODO fix date discrepancy? check only year/month/day?
       expect(year).to.equal(date.getFullYear());
       expect(month).to.equal(date.getMonth() + 1);
       expect(day).to.equal(date.getDate());
       expect(resultEntry.id).to.equal(boilerplateEntry.id);
       expect(resultEntry.situation).to.equal(boilerplateEntry.situation);
       expect(resultEntry.emotionalResponse).to.equal(boilerplateEntry.emotionalResponse);
     }).catch((err) => {
       return err;
     });
   });

   it('should retrieve a list of entries, if they exist', () => {
     ApiEntries.getEntries().then(data => {
       ApiEntries.saveEntries([...data, uniqueEntry]).then(()=> {
         ApiEntries.getEntries().then(savedEntries => {
           expect(savedEntries[1]).to.equal(uniqueEntry);
           expect(savedEntries[0].situation).to.equal(boilerplateEntry.situation);
         });
       });
     });
   });
 });
describe('saveEntries()', () => {
   it('should save entries', () => {
     ApiEntries.getEntries().then(data => {
       ApiEntries.saveEntries([...data, uniqueEntry]).then((savedEntries)=> {
         expect(savedEntries[1]).to.equal(uniqueEntry);
         expect(savedEntries[0].situation).to.equal(boilerplateEntry.situation);
       });
     });
   });
 });
});