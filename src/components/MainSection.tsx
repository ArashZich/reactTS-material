import React, { useReducer, useEffect } from "react";
import Footer from "./Footer";
import VisibleBookList from "../containers/VisibleBookList";
import { BookProvider } from "../context/BookContext";

interface MainSection {
  completedBooks: any;
  books: any;
  actions: any;
}

const reducer = (prevState: any, updatedProperty: any) => ({
  ...prevState,
  ...updatedProperty,
});
const initState = {
  books: [],
  completedBooks: 0,
  showAuthors: true,
};

function MainSection(props: MainSection) {
  const [value, setValue] = useReducer(reducer, initState);
  const handleSetValue = (targetName: string, e: any) => {
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

  const updateBookStatusRedux = (bookId: number) => {
    props.actions.updateBookStatus(bookId);
  };

  return (
    <BookProvider value={{ showAuthors: value.showAuthors }}>
      <section className="main">
        <Footer
          completedCount={props.completedBooks}
          activeCount={props.books.length - props.completedBooks}
          onClearCompleted={props.actions.clearCompleted}
        />
        <button
          onClick={() => handleSetValue("showAuthors", !value.showAuthors)}
          style={{ fontSize: "14px", margin: "5px", color: "blue" }}
        >
          Toggle authors
        </button>

        <VisibleBookList
          books={props.books}
          updateBookStatus={updateBookStatus}
        />
      </section>
    </BookProvider>
  );
}

export default MainSection;

/*
    "https://www.googleapis.com/books/v1/volumes?q=inauthor:jane%20austen"
  */
