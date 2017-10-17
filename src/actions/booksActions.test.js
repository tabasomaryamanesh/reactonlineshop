import * as actions from "./bookActions";

// When testing action creators we want to test whether
// the correct action creator was called and also whether
// the right action was returned.

describe("actions", () => {
  it("should create an action to add a new book", () => {
    const newBook = [
      {
        id: 111,
        title: "new book",
        price: "20",
        description: "this is our new book description"
      }
    ];

    const expectedAction = {
      type: "POST_BOOK",
      payload: newBook
    };
    expect(actions.postBooks(newBook)).toEqual(expectedAction);
  });
});
