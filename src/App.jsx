import { Routes, Route } from "react-router-dom";
import LandingUser from "./screens/LandingUser";
import PrintTemplate from "./components/printTemplate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path={"/"} element={<LandingUser />} />
        <Route index path={"/p"} element={<PrintTemplate />} />
      </Routes>
    </div>
  );
}

export default App;
