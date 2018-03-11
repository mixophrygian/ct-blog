import assert from "assert";
import entries from "../../src/reducers/entries";

// unit tests for the entries reducers
// mocha - http://mochajs.org/#getting-started
// assert - https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message
describe("Users reducer", () => {
  describe("ENTRIES_LIST_SAVE", () => {
    it("should return a list of entries", () => {
      assert.deepEqual(
        entries(
          {},
          {
            type: "ENTRIES_LIST_SAVE",
            entries: [
              {
                id: 1,
                situation: "Some situation",
                emotionalResponse: "Some emotional response",
              },
            ],
          }
        ),
        [
          {
            id: 1,
            situation: "Some situation",
            emotionalResponse: "Some emotional response",
          },
        ]
      );
    });
  });

  describe("ENTRIES_ADD_SAVE", () => {
    it("should return a new entry array element", () => {
      assert.deepEqual(
        entries(
          [
            {
              id: 1,
              situation: "Some situation",
              emotionalResponse: "Some emotional response",
            },
          ],
          {
            type: "ENTRIES_ADD_SAVE",
            entry: {
              id: 2,
              situation: "Other situation",
              emotionalResponse: "Other emotional response",
            },
          }
        ),
        [
          {
            id: 1,
            situation: "Some situation",
            emotionalResponse: "Some emotional response",
          },
          {
            id: 2,
            situation: "Other situation",
            emotionalResponse: "Other emotional response",
          },
        ]
      );
    });
  });

  describe("ENTRIES_EDIT_SAVE", () => {
    it("should return an edited entry array element", () => {
      assert.deepEqual(
        entries(
          [
            {
              id: 1,
              situation: "Some situation",
              emotionalResponse: "Some emotional response",
            },
            {
              id: 2,
              situation: "Other situation",
              emotionalResponse: "Other emotional response",
            },
          ],
          {
            type: "ENTRIES_EDIT_SAVE",
            entry: {
              id: 2,
              situation: "Changed situation",
              emotionalResponse: "Changed emotional response",
            },
          }
        ),
        [
          {
            id: 1,
            situation: "Some situation",
            emotionalResponse: "Some emotional response",
          },
          {
            id: 2,
            situation: "Changed situation",
            emotionalResponse: "Changed emotional response",
          },
        ]
      );
    });
  });

  describe("ENTRIES_DELETE_SAVE", () => {
    it("should return the entry array without the deleted element", () => {
      assert.deepEqual(
        entries(
          [
            {
              id: 1,
              situation: "Some situation",
              emotionalResponse: "Some emotional response",
            },
            {
              id: 2,
              situation: "Other situation",
              emotionalResponse: "Other emotional response",
            },
          ],
          {
            type: "ENTRIES_DELETE_SAVE",
            entry: { id: 2 },
          }
        ),
        [
          {
            id: 1,
            situation: "Some situation",
            emotionalResponse: "Some emotional response",
          },
        ]
      );
    });
  });
});
