import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}
