import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
