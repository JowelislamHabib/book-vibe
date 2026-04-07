import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addReadlistToLocal, getReadlistFromLocal } from "../utils/LocalDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState(() => getReadlistFromLocal());

  const handleMarkasRead = (currentBook) => {
    // step 1: store book id
    // step 2: where to store
    // step 2: array or collection
    // step 3: If the book is already exist then show a alert or toast
    // step 4: if not then add the book in the array or collection
    addReadlistToLocal(currentBook);
    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The Book is already exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} has been added to read list`);
    }
  };

  const [storeWishlist, setStoreWishlist] = useState([]);

  const handleWishlist = (currentBook) => {
    // step 1: store book id
    // step 2: where to store
    // step 2: array or collection
    // step 3: If the book is already exist then show a alert or toast
    // step 4: if not then add the book in the array or collection

    const isReadlist = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
      {},
    );

    if (isReadlist) {
      toast.error("Already in read list");
      return;
    }

    const isExistBook = storeWishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The Book is already exist in the wishlist");
    } else {
      setStoreWishlist([...storeWishlist, currentBook]);
      toast.success(`${currentBook.bookName} has been added to wishlist`);
    }
  };

  const data = {
    handleMarkasRead,
    storedBooks,
    setStoredBooks,
    handleWishlist,
    storeWishlist,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
