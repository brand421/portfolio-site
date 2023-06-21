import SideMenu from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import { SideMenuData } from "./components/Data";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <SideMenu>
        <Routes>
          <Route path="/" element={<DynamicMenuItems page="homepage" />} />
          {}
        </Routes>
        <Landing />
      </SideMenu>
    </div>
  );
}

export default App;
