export const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Página no encontrada</p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-500 transition"
      >
        Volver al inicio
      </a>
    </div>
  );
};
export default Error404;