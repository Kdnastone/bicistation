import React, { useState, useEffect } from 'react';


const GlobalForm = ({ setStations }) => {

  const url = 'https://api.citybik.es/v2/networks'; 

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [stations, setLocalStations] = useState([]);
  
  //países unicos de la api
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const uniqueCountries = [...new Set(data.networks.map((network) => network.location.country))];
      setCountries(uniqueCountries);
    };
    fetchCountries();
  }, []);

  //ciudades del país seleccionado
  useEffect(() => {
    if (selectedCountry) {
      const fetchCities = async () => {
        const response = await fetch(url);
        const data = await response.json();
        const countryCities = data.networks
          .filter((network) => network.location.country === selectedCountry)
          .map((network) => network.location.city);
        setCities(countryCities);
      };
      fetchCities();
    }
  }, [selectedCountry]);

  //manejador del país seleccionado
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity('');
    setLocalStations([]);
  };

  //manejador de la ciudad seleccionada 
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    const fetchStations = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const cityStations = data.networks.filter( //traer estaciones de la ciudad
        (network) => network.location.city === e.target.value
      );
      
      //almacenar los detalles de las estaciones
      const detailedStations = await Promise.all(
        cityStations.map(async (station) => {
          const response = await fetch(`https://api.citybik.es${station.href}`);
          const data = await response.json();
          return data.network.stations.map((s) => ({
            ...s,
            company: station.company,
            networkName: station.name,
            country: station.location.country,
            city: station.location.city,
          }));
        })
      );
    
      setStations(detailedStations.flat());
    };
    fetchStations();
  };

  return (
    <form className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-semibold text-[#184E77] mb-6 text-center">Formulario de selección</h1>
      
      <div className="mb-6">
        <label htmlFor="country" className="block text-lg font-medium text-[#184E77] mb-2">
          Seleccione un País
        </label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="w-full p-4 border-2 border-[#D9ED92] rounded-lg focus:outline-none focus:border-[#1E6091] text-lg"
        >
          <option value="">Seleccione un País</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
  
      {selectedCountry ? (
        <div className="mb-6">
          <label htmlFor="city" className="block text-lg font-medium text-[#184E77] mb-2">
            Seleccione una Ciudad
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="w-full p-4 border-2 border-[#D9ED92] rounded-lg focus:outline-none focus:border-[#1E6091] text-lg"
          >
            <option value="">Seleccione una Ciudad</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      ) : null}
    </form>
  );
};

export default GlobalForm;
