import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import FAQ from "./component/FAQ.jsx";
import ProductCard from "./component/ProductCard";

import NavBar from "./component/Navbar";
// import Product from "./component/products/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ProductCard" element={<ProductCard />} />
        </Routes>
      </BrowserRouter>
      {/* <Product /> */}
    </div>
  );
}

export default App;
