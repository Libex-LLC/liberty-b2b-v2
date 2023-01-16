import { Routes, Route } from 'react-router-dom';
import LandingUser from './screens/LandingUser'



function App() {
 

  return (
    <div className="App">
            <Routes>
                
                <Route index path={'/'} element={<LandingUser />} />
               
            </Routes>
        </div>
  )
}

export default App
