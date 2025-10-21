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
import NewsPage from "../pages/NewsPage";
import NewsDetailPage from "../pages/NewsDetailPage";
import TestPage from "../pages/Test";
import MaintenancePage from "../pages/MaintenancePage";
import UnderConstructionPage from "../pages/UnderConstructionPage";
import NotFoundPage from "../pages/NotFoundPage";
import MaintenanceGuard from "./MaintenanceGuard";
import MaintenanceOnlyRoute from "./MaintenanceOnlyRoute";

const MAINTENANCE =
  String(
    (import.meta as any).env?.VITE_MAINTENANCE_MODE || "false"
  ).toLowerCase() === "true";

const router = MAINTENANCE
  ? createBrowserRouter([
      { path: "/", element: <MaintenancePage /> },
      { path: "*", element: <MaintenancePage /> },
    ])
  : createBrowserRouter([
      {
        element: (
          <MaintenanceGuard>
            <MainLayout />
          </MaintenanceGuard>
        ),
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
            path: "/student_achievements",
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
          {
            path: "/news",
            element: <NewsPage />,
          },
          {
            path: "/news_details",
            element: <NewsDetailPage />,
          },
          {
            path: "/test",
            element: <TestPage />,
          },
          {
            path: "/maintenance",
            element: <MaintenanceOnlyRoute />,
          },
          {
            path: "/under-construction",
            element: <UnderConstructionPage />,
          },
          {
            path: "*",
            element: <NotFoundPage />,
          },
        ],
      },
    ]);

export default router;
