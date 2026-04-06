import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const Books = () => {
  const { storedBooks, storeWishlist } = useContext(BookContext);
  console.log(storedBooks);

  return (
    <div>
      <h1>this is books page</h1>
      <button className="btn btn-primary">
        {" "}
        Read list ({storedBooks.length})
      </button>
      <button className="btn btn-Outline">
        {" "}
        Wishlist list ({storeWishlist.length})
      </button>
    </div>
  );
};

export default Books;
