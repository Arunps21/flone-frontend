import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./sections/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Collections from "./pages/Collections";
import SearchBar from "./components/SearchBar";
import IndividualProduct from "./pages/IndividualProduct";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Nav />
      <SearchBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collections />} />
          <Route path="/product/:id" element={<IndividualProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
