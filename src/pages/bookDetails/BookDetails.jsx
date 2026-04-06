import React, { use, useState } from "react";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContext";

// const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();

  const books = useLoaderData();

  //   const books = use(booksPromise);
  //   console.log(books);

  const expectedBook = books.find((book) => book.bookId == bookParamsId);

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const { handleMarkasRead, storedBooks } = useContext(BookContext);
  // console.log(handleMarkasRead, storedBooks, "bookContext");

  return (
    <div className="mt-10 card lg:card-side bg-base-100 shadow-sm container mx-auto">
      <figure className="bg-neutral-50 p-20 min-w-[570px] rounded-lg">
        <img src={image} alt={bookName} className=" rounded-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p className="font-bold">By: {author}</p>
        <div className="divider"></div>
        <p className="font-bold">{category}</p>
        <div className="divider"></div>
        <p>
          <span className="font-bold">Review:</span> {review}
        </p>
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">Tags:</span>
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-success badge-soft">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="divider"></div>
        <p>
          Number of pages: <span className="font-bold">{totalPages}</span>
        </p>
        <p>
          Publisher: <span className="font-bold">{publisher}</span>
        </p>
        <p>
          Year Of Publishing:{" "}
          <span className="font-bold">{yearOfPublishing}</span>
        </p>
        <p>
          Rating: <span className="font-bold">{rating}</span>
        </p>

        <div className="card-actions">
          <button
            onClick={() => handleMarkasRead(expectedBook)}
            className="btn btn-outline"
          >
            Mark as Read
          </button>
          <button className="btn btn-info">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
