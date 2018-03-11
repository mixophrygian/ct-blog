/* eslint-disable no-console */
//import assert from 'assert';
import { expect } from "chai";
import sinon from "sinon";
import localforage from "localforage";
import ApiEntries from "../../src/api/entries";

let store;
describe("Entries API", () => {
  beforeEach(() => {
    store = {};
    sinon.stub(localforage, "setItem").callsFake((key, value) => {
      store[key] = value;
      return Promise.resolve(store[key]);
    });
    sinon.stub(localforage, "getItem").callsFake(key => {
      return Promise.resolve(store[key]);
    });
  });
  afterEach(() => {
    localforage.getItem.restore();
    localforage.setItem.restore();
  });
  const uniqueEntry = {
    id: 123,
    date: new Date(),
    situation: "A unique entry situation ",
    emotionalResponse: "A unique emotional response",
    automaticThoughts: "Unique automatic thoughts",
    cognitiveDistortions: ["emotionalReasoning", "jumpingToConclusions"],
    rationalResponse: "A unique rational response",
  };
  describe("saveEntries()", () => {
    it("should save entries", () => {
      ApiEntries.getEntries().then(data => {
        ApiEntries.saveEntries([...data, uniqueEntry])
          .then(savedEntries => {
            expect(savedEntries[0]).to.equal(uniqueEntry);
          })
          .catch(err => console.log("save failed", err));
      });
    });
  });

  describe("getEntries()", () => {
    it("should resolve with no entries if none exist", () => {
      ApiEntries.getEntries()
        .then(data => {
          expect(!data).to.be.true;
        })
        .catch(err => {
          return err;
        });
    });

    it("should retrieve a list of entries, if they exist", () => {
      ApiEntries.saveEntries([uniqueEntry]).then(() => {
        ApiEntries.getEntries()
          .then(savedEntries => {
            expect(savedEntries[0]).to.equal(uniqueEntry);
          })
          .catch(err => console.log("retrieval failed", err));
      });
    });
  });
});
