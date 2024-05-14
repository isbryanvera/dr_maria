import { Carousel } from 'flowbite-react';

const Results = () => {
  return (
    <section className="flex flex-col items-center gap-8 w-full">
    <h2 className="text-6xl text-pretty">Mis Pacientes</h2>
    <div className="h-56 sm:h-64 xl:h-[500px] w-full">
      <Carousel pauseOnHover>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
    <p className="text-pretty">Creemos en la belleza de cada individuo y en la capacidad de la cirugía plástica para realzarla. A través de los casos que compartimos, te invitamos a explorar las transformaciones asombrosas que la Dra. Maria Baeza ha logrado para sus pacientes. Desde rinoplastias que mejoran la armonía facial hasta bichectomías que resaltan los rasgos naturales, cada caso muestra resultados excepcionales y naturales. Sumérgete en estos casos y descubre cómo la Dra.Maria Baeza puede ayudarte a lograr la mejor versión de ti mismo/a.</p>
  </section>
  );
};

export { Results };
