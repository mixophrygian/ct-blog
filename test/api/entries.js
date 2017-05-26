// eslint-disable
// import assert from 'assert';
// import { expect } from "chai";
// import ApiEntries from '../../src/api/entries';
//TODO add PhantomJS to make localforage actually work?


let boilerplateEntry;
describe("Entries API", () => {
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
    // const action =
    // { type: "ENTRIES_ADD_EDIT",
    //   entry: newEntry
    // }
    // const entries = [boilerplateEntry, newEntry]
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
  //  const action =
  //  { type: "ENTRIES_DELETE_SAVE",
  //    entry: boilerplateEntry
  //  };
   it('should delete an existing entry', () => {
    // mock localforage getItem promise to resolve with only boilerPlateEntry and a unique entry
    // expect(ApiEntries.deleteEntry()) to resolve with nothing?
    // expect localForage getList to resolve with only a unique entry
   });
 });
})