import React from "react";
import { LucideStamp, LucideStar } from "lucide-react";

const BookCard = ({ book }) => {
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure className="p-6 bg-neutral-50">
          <img
            src={book.image}
            alt={book.bookName}
            className="rounded-xl max-h-[300px] object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-2">
            {book.tags.map((tag, index) => (
              <div key={index} className="badge badge-success badge-soft">
                {tag}
              </div>
            ))}{" "}
          </div>
          <h2 className="card-title">{book.bookName}</h2>
          <p>By: {book.author}</p>
          <div className="divider"></div>

          <div className="card-actions justify-between items-center">
            <div className="text-base">{book.category}</div>
            <div className="text-base flex gap-2 items-center">
              {book.rating} <LucideStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
