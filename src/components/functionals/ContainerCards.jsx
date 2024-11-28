import React, { useState, useEffect } from 'react';

function ContainerCards() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetch('http://api.citybik.es/v2/networks/velib')
      .then((response) => response.json())
      .then((data) => {
        setStations(data.network ? data.network.stations : []);
      })
      .catch((error) => console.error('Error cargando la información:', error));
  }, []);

  return (
    <div className="station-list">
      {stations.length > 0 ? (
        stations.map((station) => (
          <div key={station.id} className="card">
            <h3>{station.name}</h3>
            <p><strong>Empresa:</strong> {station.company}</p>
            <p><strong>Nombre de la Estación:</strong> {station.name}</p>
            <p><strong>País:</strong> {station.location.city}</p>
            <p><strong>Ciudad:</strong> {station.location.city}, {station.location.country}</p>
            <p><strong>Bicicletas Disponibles:</strong> {station.free_bikes}</p>
            <p><strong>Parqueaderos Disponibles:</strong> {station.empty_slots}</p>
          </div>
        ))
      ) : (
        <p>Cargando información ...</p>
      )}
    </div>
  );
}
