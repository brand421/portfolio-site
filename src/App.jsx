import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
