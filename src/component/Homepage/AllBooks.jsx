import React, { use } from "react";
import BookCard from "../Ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());
const AllBooks = () => {
  const books = use(booksPromise);
  // console.log(books);
  return (
    <div>
      <div className="my-12 container mx-auto">
        <h2 className="font-bold text-3xl text-center mb-10">Books</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => {
            return <BookCard key={book.bookId} book={book} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
