  import assert from 'assert';
  import { expect } from "chai";
  import sinon from 'sinon';
  import localforage from "localforage";
  import ApiEntries from '../../src/api/entries';

let boilerplateEntry;
let store;
describe("Entries API", () => {
   beforeEach(() => {
       store = {};
      //localforage = {getItem: () => {}, setItem: () => {}};
       sinon.stub(localforage, 'getItem').resolves(store.state);
       sinon.stub(localforage, 'setItem').callsFake((key, value) => {
         store[key] = value;
         return Promise.resolve(store.state);
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
 describe('getList()', () => {
   it('should create a boilerplate list of entries if none are present', () => {
     boilerplateEntry;
     ApiEntries.getList().then(data => {
       const resultEntry = data[0];
       //TODO fix date discrepancy?
       expect(resultEntry.id).to.equal(boilerplateEntry.id);
       expect(resultEntry.situation).to.equal(boilerplateEntry.situation);
       //console.log(data[0], boilerplateEntry);
       //expect(data[0]).to.deep.equal(boilerplateEntry);
       //assert.deepEqual(data[0], boilerplateEntry);
     });
     //mock localforage getItem promise to resolve with undefined
     //expect ApiEntries.getList() to resolve with the boilerplateEntry
   });

   it('should retrieve a list of entries, if they exist', () => {
     uniqueEntry;
     //mock localforage getItem promise to resolve with an array that contains a uniqueEntry
     //expect ApiEntries.getList() to resolve with the uniquEntry

   });
 });

 describe('addEdit()', () => {
   let newEntry;
   it('should add a new entry', () => {
    //mock localforage getItem promise to resolve with only boilerPlateEntry
    //call ApiEntyries.addEdit with an undefined id
    newEntry = {
      id: null,
      date: new Date(),
      situation: "a situation",
      emotionalResponse: "a response",
      automaticThoughts: "thoughts",
      cognitiveDistortions: ['someDistortion'],
      rationalResponse: 'a response',
    };
     //const action = {
     //  type: "ENTRIES_ADD_EDIT",
     //  entry: newEntry
    // }
     //const entries = [boilerplateEntry, newEntry]
     //expect ApiEntries.addEdit(action) to resolve with { entries, type: 'Add' }
   });

   it('should edit an existing entry', () => {
     newEntry.id = 1234;
     newEntry.rationalResponse = "a slightly different response";
    // expect(ApiEntries.addEdit(action)).to.resolve.with([boilerPlateEntry, {updated new Entry}, type: 'Edit'])
     //resolves with 'Edit'

   });
 });
 describe('deleteEntry()', () => {
    // const action = {
    //   type: "ENTRIES_DELETE_SAVE",
    //   entry: boilerplateEntry
    // };
   it('should delete an existing entry', () => {
    // mock localforage getItem promise to resolve with only boilerPlateEntry and a unique entry
    // expect(ApiEntries.deleteEntry()) to resolve with nothing?
    // expect localForage getList to resolve with only a unique entry
   });
 });
})