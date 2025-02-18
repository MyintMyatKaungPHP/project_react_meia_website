import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "../context/ThemeContext";

function Layout() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
