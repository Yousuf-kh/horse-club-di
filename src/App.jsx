import React from "react";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import ServicesPage from "./pages/servicesPage/ServicesPage";
import Gallery from "./pages/gallery/Gallery";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/services"} element={<ServicesPage />} />
        <Route path={"/gallery"} element={<Gallery />} />
      </Routes>
    </>
  );
};

export default App;
