import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./sections/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Collections from "./pages/Collections";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collections />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
