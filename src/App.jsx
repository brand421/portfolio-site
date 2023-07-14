import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <AnimatedRoutes />
      </Sidebar>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
