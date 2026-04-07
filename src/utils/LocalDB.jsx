const getReadlistFromLocal = () => {
  const allReadlist = localStorage.getItem("readList");

  if (allReadlist) return JSON.parse(allReadlist);
  return [];
};

const addReadlistToLocal = (book) => {
  const allBooks = getReadlistFromLocal();
  const isAlreadyExist = allBooks.find(
    (singleBook) => singleBook.bookId === book.bookId,
  );
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allBooks));
  }
};

export { addReadlistToLocal, getReadlistFromLocal };
