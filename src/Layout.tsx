import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Testimonial from "./components/Testimonial";

function Layout() {
  return (
    <div className="bg-color1">
      <Header />
      <Outlet />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Layout;
