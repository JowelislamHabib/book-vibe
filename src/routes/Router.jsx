import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage.jsx";
import Books from "../pages/books/Books.jsx";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
