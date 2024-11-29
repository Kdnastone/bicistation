import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Parking, Rent, Error404, About} from "../pages/Ruteo";
import Navbar from '../components/basics/Navbar';
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
        <Route path="About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
