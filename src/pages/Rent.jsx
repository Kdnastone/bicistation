import React, { useState } from 'react';
import GlobalForm from '../components/functionals/GlobalForm';
import ContainerCards from '../components/functionals/ContainerCards';

const Rent = () => {
  const [stations, setStations] = useState([]);
  const item = false
  const title = 'Alquiler'

  return (
    <div className='div'>
      <GlobalForm setStations={setStations} title={title} />
      <ContainerCards item={item} stations={stations}/>
    </div>
  );
};

export default Rent ;
