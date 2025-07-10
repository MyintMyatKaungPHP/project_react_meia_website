import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutMIEAPage from "../pages/AboutMIEAPage";
import OrganisationalPage from "../pages/OrganisationalPage";
import AchievementPage from "../pages/AchievementPage";
import StudentAchievementsPage from "../pages/StudentAchievementsPage";
import ProgrammesPage from "../pages/ProgrammesPage";
import FacilitiesPage from "../pages/FacilitiesPage";
import Contact from "../pages/ContactPage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
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
      {
        path: "/school_achievement",
        element: <AchievementPage />,
      },
      {
        path: "/StudentAchievements",
        element: <StudentAchievementsPage />,
      },
      {
        path: "/programmes",
        element: <ProgrammesPage />,
      },
      {
        path: "/facilities",
        element: <FacilitiesPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
