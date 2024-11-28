import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Parking from "../pages/Parking";
import Rent from "../pages/Rent";
import Header from '../components/basics/Header';
import Footer from '../components/basics/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/Parking" element={<Parking />} />
          <Route path="/Rent" element={<Rent />} />

          {/* Redirigir a /Rent por defecto */}
          <Route path="/" element={<Navigate to="/Rent" replace />} />

          {/* Ruta para manejar 404 Not Found */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;