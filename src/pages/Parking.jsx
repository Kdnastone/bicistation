import React, { useState } from 'react';
import GlobalForm from '../components/functionals/GlobalForm';
import ContainerCards from '../components/functionals/ContainerCards';

const Parking = () => {
  const [stations, setStations] = useState([]);
  const item = true

return (
    <div>
      <GlobalForm setStations={setStations} />
      <ContainerCards item={item} stations={stations}/>
    </div>
  );  
};

export default Parking;
