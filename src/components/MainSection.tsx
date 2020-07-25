import React, { useReducer, useEffect } from "react";
import Footer from "./Footer";
import VisibleBookList from "../containers/VisibleBookList";

interface MainSection {
  actions: any;
}

const reducer = (prevState: any, updatedProperty: any) => ({
  ...prevState,
  ...updatedProperty,
});
const initState = {
  books: [],
  completedBooks: 0,
};

function MainSection(props: MainSection) {
  const [value, setValue] = useReducer(reducer, initState);
  const handleSetValue = (targetName: string, e: number) => {
    setValue({ [targetName]: e });
  };

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=inauthor:jane%20austen"
    )
      .then((response) => response.json())
      .then((myData) => handleSetValue("books", myData.items));
  }, []);

  const updateBookStatus = (bookId: any, status: string) => {
    let newBooks = value.books;
    const book = newBooks.find((book: { id: any }) => book.id === bookId);
    book.status = status;
    handleSetValue("books", newBooks);
    status === "completed"
      ? handleSetValue("completedBooks", value.completedBooks + 1)
      : handleSetValue("completedBooks", value.completedBooks - 1);
  };

  return (
    <section className="main">
      <VisibleBookList
        books={value.books}
        updateBookStatus={updateBookStatus}
      />
      <Footer
        completedCount={value.completedBooks}
        activeCount={value.books.length - value.completedBooks}
        onClearCompleted={props.actions.clearCompleted}
      />
    </section>
  );
}

export default MainSection;

/*
    "https://www.googleapis.com/books/v1/volumes?q=inauthor:jane%20austen"
  */
