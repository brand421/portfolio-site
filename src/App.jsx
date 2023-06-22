import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
