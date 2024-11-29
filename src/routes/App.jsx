import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Parking, Rent, Error404} from "../pages/Ruteo";
import Footer from '../components/basics/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Parking" element={<Parking />} />
        <Route path="/Rent" element={<Rent />} />
        <Route path="Error404" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
