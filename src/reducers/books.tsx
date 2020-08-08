import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
  UPDATE_BOOK,
} from "../constants/ActionTypes";

import classicBooks from "../constants/books";

const initialState = {
  books: classicBooks,
  completedBooks: 0,
};

interface book {
  type: any;
  id: number;
}

export default function todos(state = initialState, action: book) {
  switch (action.type) {
    case UPDATE_BOOK: {
      return {
        ...state,
        books: state.books.map((book) => {
          return book.id === action.id
            ? { ...book, completed: !book.completed }
            : book;
        }),
      };
    }
    default:
      return state;
  }
}
