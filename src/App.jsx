import LandingUser from './screens/LandingUser';
import Reception from './screens/Reception';
import { VisitorCheckIn } from './screens/VisitorCheckIn';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path={'/'} element={<LandingUser />} />
        <Route index path={'/visitor-check-in'} element={<VisitorCheckIn />} />
        <Route path={'/reception'} element={<Reception />} />
      </Routes>
    </div>
  );
}

export default App;
