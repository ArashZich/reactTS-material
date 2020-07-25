import React from "react";
import BookItem from "./BookItem";

interface BookList {
  books: any;
  updateBookStatus: any;
  actions: any;
}

const BookList = (props: BookList) => {
  const { books, updateBookStatus, actions } = props;
  return (
    <ul className="todo-list">
      {books.map((book: { id: string | number | undefined }) => (
        <BookItem
          key={book.id}
          book={book}
          updateBookStatus={updateBookStatus}
          {...actions}
        />
      ))}
    </ul>
  );
};

export default BookList;
