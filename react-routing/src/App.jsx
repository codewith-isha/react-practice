import React from "react";

import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Navbar from "./components/navbar/Navbar";
import TechService from "./TechService";
import AboutMe from "./Aboutme";
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/service" element={<Service />}>
          <Route path="tech" element={<TechService />} />
        </Route>

        <Route path="/about" element={<About />}>
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
