import './App.css';
import LandingUser from './screens/LandingUser';
import { VisitorCheckIn } from './screens/VisitorCheckIn';
import { Routes, Route } from 'react-router-dom';
import LandingUser from './screens/LandingUser';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route index path={'/'} element={<LandingUser />} />
      </Routes>
    </div>
  );
}

export default App;
