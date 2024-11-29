function ContainerCards({item, stations }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
      {stations.map((station) => (
        <div
          key={station.id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold text-[#184E77] mb-4">{station.name}</h2>
          
          <p className="text-md text-[#555]">
            <strong className="font-bold text-[#184E77]">Empresa:</strong> {station.company.join(', ')}
          </p>
          
          <p className="text-md text-[#555]">
            <strong className="font-bold text-[#184E77]">País:</strong> {station.country}
          </p>
          
          <p className="text-md text-[#555]">
            <strong className="font-bold text-[#184E77]">Ciudad:</strong> {station.city}, {station.country}
          </p>
          
          {item ? (
            <p className="text-md text-[#555]">
              <strong className="font-bold text-[#184E77]">Parqueaderos Disponibles:</strong> {station.empty_slots}
            </p>
          ) : (
            <p className="text-md text-[#555]">
              <strong className="font-bold text-[#184E77]">Bicicletas Disponibles:</strong> {station.free_bikes}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ContainerCards;