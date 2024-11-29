import React, { useState } from 'react';
import GlobalForm from '../components/functionals/GlobalForm';
import ContainerCards from '../components/functionals/ContainerCards';

const Parking = () => {
  const [stations, setStations] = useState([]);
  const item = true
  cons title = 'Parqueaderos'

return (
    <div>
      <GlobalForm setStations={setStations} title= {title}/>
      <ContainerCards item={item} stations={stations}/>
    </div>
  );  
};

export default Parking;
