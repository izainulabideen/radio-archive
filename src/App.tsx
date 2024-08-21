import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./Layout";
import About from "./components/about/About";
import ProductLayout from "./components/product/productLayout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:slug" element={<ProductLayout />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
