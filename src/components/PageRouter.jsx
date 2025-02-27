import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout.jsx";
import HomePage from "../pages/HomePage.jsx";
import AboutMIEAPage from "../pages/AboutMIEAPage.jsx";
import OrganisationalPage from "../pages/OrganisationalPage.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about_miea",
        element: <AboutMIEAPage />,
      },
      {
        path: "/organisational_structure",
        element: <OrganisationalPage />,
      },
    ],
  },
]);

export default router;
