import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../component/Ui/BookCard";

const ReadList = ({ sortingType }) => {
  const { storedBooks, storeWishlist } = useContext(BookContext);

  const [filteredReadList, setFilteredReadList] = useState(storedBooks);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...storedBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        console.log(sortedData);
        setFilteredReadList(sortedData);
      } else if (sortingType === "ratings") {
        const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
        console.log(sortedData);
        setFilteredReadList(sortedData);
      }
    }
  });

  if (filteredReadList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center ">
        <h2 className="font-bold text-3xl">No read list data found</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Read List ({filteredReadList.length})</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredReadList.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default ReadList;
