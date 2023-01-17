import LandingUser from './screens/LandingUser';
import { VisitorCheckIn } from './screens/VisitorCheckIn';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route index path={'/'} element={<LandingUser />} />
        <Route index path={'/visitor-check-in'} element={<VisitorCheckIn />} />
      </Routes>
    </div>
  );
}

export default App;
