import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
