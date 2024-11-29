export const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 text-center py-10 text-[#184E77]">
        <h1 className="text-4xl font-bold">Acerca de Nosotros</h1>
        <p className="text-lg mt-2">Conoce más sobre nuestra empresa.</p>
      </div>

      <main className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#184E77] mb-4">¿Quiénes somos?</h2>
            <p className="text-[#184E77] leading-relaxed">
              BiciRoads: Líder Global en Soluciones de Movilidad en Bicicleta
            </p>
            <p className="text-[#184E77] leading-relaxed">
              BiciRoads es una empresa líder a nivel mundial en la comercialización de bicicletas
              diseñadas para satisfacer las necesidades específicas de sus clientes, ya sea a través
              de la renta o el alquiler de vehículos completamente adaptados para diversas
              condiciones y usos.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#184E77] mb-4">Compromiso con Nuestros Clientes</h2>
            <p className="text-[#184E77] leading-relaxed">
              En BiciRoads, nuestros clientes son nuestra prioridad. Escuchando sus solicitudes y
              necesidades, hemos iniciado el desarrollo de espacios seguros y monitoreados en
              diferentes países, en donde los usuarios que ya cuentan con su propia bicicleta puedan
              estacionarlas de forma segura las 24 horas del día.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#184E77] mb-4">
              Alianza Estratégica con Technova Girls
            </h2>
            <p className="text-[#184E77] leading-relaxed">
              Para impulsar nuestra presencia digital y optimizar la experiencia de nuestros
              usuarios, contamos con el apoyo de Technova Girls, una destacada empresa de desarrollo
              tecnológico formada por profesionales con un alto nivel de innovación y análisis,
              enfocada en colaborar con empresas que buscan reducir su huella de carbono y promover
              la sostenibilidad.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#184E77] mb-4">Compromiso con la Sostenibilidad</h2>
            <p className="text-[#184E77] leading-relaxed">
              En BiciRoads, nos enorgullece trabajar en colaboración con Technova Girls y otras
              alianzas estratégicas que refuerzan nuestros principios de sostenibilidad, innovación
              y compromiso con el medio ambiente, garantizando la coherencia entre nuestras acciones
              y los valores que promueve nuestra marca.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;





