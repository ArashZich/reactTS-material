import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { BookConsumer } from "../context/BookContext";

interface BookItem {
  book: any;
  editBook: any;
  deleteBook: any;
  completeBook: any;
  updateBookStatus: any;
  volumeInfo: any;
}

function BookItem(props: BookItem) {
  const { book, updateBookStatus } = props;
  const [completed, setCompleted] = useState("");
  const { volumeInfo } = book;
  const bookCompleted = book.status === "completed";

  useEffect(() => {
    setCompleted(book.completed);
  }, [book]);

  const statusChange = () => {
    const status =
      !book.status || book.status === "unread" ? "completed" : "unread";
    setCompleted(status);
    updateBookStatus(book.id, status);
  };

  const element = (
    <BookConsumer>
      {({ showAuthors }) => (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={bookCompleted}
            onChange={() => statusChange()}
          />
          <label>{volumeInfo.title}</label>
          {showAuthors ? (
            <p
              style={{
                fontSize: "12px",
                textAlign: "right",
                marginRight: "10px",
              }}
            >
              Author: {volumeInfo.authors[0]}
            </p>
          ) : null}
        </div>
      )}
    </BookConsumer>
  );

  return (
    <li
      className={classnames({
        completed: bookCompleted,
      })}
    >
      {element}
    </li>
  );
}

export default BookItem;
