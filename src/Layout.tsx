import Header from "./components/Header";
import Footer from "./components/Footer";
// import { Outlet } from "react-router-dom";
import Testimonial from "./components/Testimonial";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="top" className="bg-color1">
      <Header />
      {children}
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Layout;
