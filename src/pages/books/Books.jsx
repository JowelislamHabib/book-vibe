import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../../listedBooks/ReadList";
import Wishlist from "../../listedBooks/Wishlist";

const Books = () => {
  const { storedBooks, storeWishlist } = useContext(BookContext);

  const [sortingType, setSortingType] = useState("");

  return (
    <div className="container mx-auto my-3">
      <div className="flex justify-center my-3">
        <div className="dropdown dropdown-bottom dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by : <span className="capitalize">{sortingType}</span>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li
              onClick={() => {
                setSortingType("pages");
              }}
            >
              <a>Pages</a>
            </li>
            <li
              onClick={() => {
                setSortingType("ratings");
              }}
            >
              <a>Ratings</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>
        <TabPanel>
          <ReadList sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <Wishlist sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
