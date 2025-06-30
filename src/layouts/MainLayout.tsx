import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import { ThemeProvider } from "../context/ThemeContext";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout: React.FC = () => {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default MainLayout;
