import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutMIEAPage from "../pages/AboutMIEAPage";
import OrganisationalPage from "../pages/OrganisationalPage";
import AchievementPage from "../pages/AchievementPage";
import StudentAchievementsPage from "../pages/StudentAchievementsPage";

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
        path: "/achievement",
        element: <AchievementPage />,
      },
      {
        path: "/StudentAchievements",
        element: <StudentAchievementsPage />,
      },
    ],
  },
]);

export default router;
