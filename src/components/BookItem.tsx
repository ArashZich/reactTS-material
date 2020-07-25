import React, { useState, useEffect } from "react";
import classnames from "classnames";

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
  }, []);

  const statusChange = () => {
    const status =
      !book.status || book.status === "unread" ? "completed" : "unread";
    setCompleted(status);
    updateBookStatus(book.id, status);
  };

  const element = (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={bookCompleted}
        onChange={() => statusChange()}
      />
      <label>{volumeInfo.title}</label>
      <p style={{ fontSize: "12px", textAlign: "right", marginRight: "10px" }}>
        Author: {volumeInfo.authors[0]}
      </p>
    </div>
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
