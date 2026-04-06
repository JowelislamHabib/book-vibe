import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../../listedBooks/ReadList";
import Wishlist from "../../listedBooks/Wishlist";

const Books = () => {
  const { storedBooks, storeWishlist } = useContext(BookContext);
  console.log(storedBooks);

  return (
    <div className="container mx-auto">
      <h1>this is books page</h1>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>
        <TabPanel>
          <ReadList />
        </TabPanel>
        <TabPanel>
          <Wishlist />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
