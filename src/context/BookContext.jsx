import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);

  const handleMarkasRead = (currentBook) => {
    // step 1: store book id
    // step 2: where to store
    // step 2: array or collection
    // step 3: If the book is already exist then show a alert or toast
    // step 4: if not then add the book in the array or collection

    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      alert("The Book is already exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      alert(`${currentBook.bookName} has been added to read list`);
    }
  };

  const data = {
    handleMarkasRead,
    storedBooks,
    setStoredBooks,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
