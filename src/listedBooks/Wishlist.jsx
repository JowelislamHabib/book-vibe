import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../component/Ui/BookCard";

const Wishlist = ({ sortingType }) => {
  const { storedBooks, storeWishlist } = useContext(BookContext);

  const [filteredwishlist, setFilteredWishlist] = useState(storeWishlist);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...storedBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        console.log(sortedData);
        setFilteredWishlist(sortedData);
      } else if (sortingType === "ratings") {
        const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
        console.log(sortedData);
        setFilteredWishlist(sortedData);
      }
    }
  });

  if (storeWishlist.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center ">
        <h2 className="font-bold text-3xl">No wishlist book found</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Wishlist ({filteredwishlist.length})</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredwishlist.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
