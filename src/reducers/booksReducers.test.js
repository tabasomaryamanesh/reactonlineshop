import { booksReducers } from "./booksReducers";

describe("books reducer", () => {
  const initialstate = {
    books: [
      {
        id: 11,
        title: "book title one",
        description: "book description one",
        price: 53.5
      },
      {
        id: 42,
        title: "book title two",
        description: "book description two",
        price: 80.5
      }
    ]
  };
  const newBook = [
    {
      id: 111,
      title: "new book",
      price: "20",
      description: "this is our new book description"
    }
  ];

  it("returns proper initial state", () => {
    expect(booksReducers(undefined, {})).toEqual(initialstate);
  });

  it("adds a new book", () => {
    expect(
      booksReducers(undefined, {
        type: "POST_BOOK",
        payload: newBook
      })
    ).toEqual({
      books: [
        {
          id: 11,
          title: "book title one",
          description: "book description one",
          price: 53.5
        },
        {
          id: 42,
          title: "book title two",
          description: "book description two",
          price: 80.5
        },
        {
          id: 111,
          title: "new book",
          price: "20",
          description: "this is our new book description"
        }
      ]
    });
  });

  it("returns same state for unknown action", () => {
    expect(booksReducers(undefined, { type: "UNKNOWN_ACTION" })).toEqual(
      initialstate
    );
  });
});
