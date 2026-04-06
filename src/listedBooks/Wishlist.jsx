import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../component/Ui/BookCard";

const Wishlist = () => {
  const { storedBooks, storeWishlist } = useContext(BookContext);

  return (
    <div>
      <h2>Wishlist ({storeWishlist.length})</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {storeWishlist.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
