import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Users from './components/users/Users';
import Trips from './components/trips/Trips';
// import Locations from './components/locations/Locations';

const App = () => (
  <>
  <Navbar />
  <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
<<<<<<< HEAD
      <Route path="/users" element={<Users />} />
=======
      <Route path="/users" element={ <Users />} />
>>>>>>> e81f9ae5 (navbar update)
      <Route path="/users/:userId/trips" element={ <Trips />} />
      {/* <Route path="/trips/:tripId/locations" element={ <Locations /> } /> */}
      <Route path="*" element={ <Nomatch />} />  
    </Routes>
  </>
)
export default App;
