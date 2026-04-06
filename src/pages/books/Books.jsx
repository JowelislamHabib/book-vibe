import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const Books = () => {
  const { storedBooks } = useContext(BookContext);
  console.log(storedBooks);

  return (
    <div>
      <h1>this is books page</h1>
    </div>
  );
};

export default Books;
