import React from "react";

interface IContextProps {
  showAuthors: boolean;
}

const BookContext = React.createContext({} as IContextProps);

const BookProvider = BookContext.Provider;
const BookConsumer = BookContext.Consumer;

export { BookProvider, BookConsumer };
