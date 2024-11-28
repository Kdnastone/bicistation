import { useState, useEffect } from 'react';

export default function Rent() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const callApi = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        // Obteniendo los primeros 50 elementos
        const first100 = data.networks.slice(0, 50);

        // Extrayendo ciudades y países
        const cities = first100.map((item) => item.location.city);
        setCities(cities);

        const countriesApi = first100.map((item) => item.location.country);
        setCountries(countriesApi);
      } catch (error) {
        console.error('Error al llamar a la API:', error);
      }
    };

    // Llamar a la API solo una vez
    callApi('https://api.citybik.es/v2/networks');
  }, []); // Arreglo de dependencias vacío para evitar llamadas repetidas

  console.log(cities)
  console.log(countries)

  return (
    <div>
      <h1>Ciudades</h1>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>

      <h1>Países</h1>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
    </div>
  );
}