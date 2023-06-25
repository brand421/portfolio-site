import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
    <Sidebar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
