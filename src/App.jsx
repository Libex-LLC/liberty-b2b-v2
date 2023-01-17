import { Routes, Route } from "react-router-dom";
import LandingUser from "./screens/LandingUser";
import { WebcamCapture } from "./components/Webcam";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path={"/"} element={<LandingUser />} />
        {/* TEMP for checking feature <Route index path={"/cam"} element={<WebcamCapture />} />*/}
      </Routes>
    </div>
  );
}

export default App;
