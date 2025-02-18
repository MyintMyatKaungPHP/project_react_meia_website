import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout.jsx";
import HomePage from "../pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
