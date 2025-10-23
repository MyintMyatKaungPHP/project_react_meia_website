import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import { ThemeProvider } from "../context/ThemeContext";
import ScrollToTop from "../components/ScrollToTop";
import { useState, useEffect } from "react";

const MainLayout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading check
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay to simulate API loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <ScrollToTop />
      <Navbar />
      <main className={isLoading ? "h-screen" : ""}>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default MainLayout;
