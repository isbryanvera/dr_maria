import { Carousel } from 'flowbite-react';
import result1 from '../../assets/images/p1.jpeg';
import result2 from '../../assets/images/p2.jpeg';
import result3 from '../../assets/images/p3.jpeg';
import result4 from '../../assets/images/p4.jpeg';
import result5 from '../../assets/images/p5.jpeg';

const Results = () => {
  return (
    <section className="flex flex-col items-center gap-8 w-full">
    <h2 className="text-3xl md:text-6xl text-pretty">Mis Pacientes</h2>
    <div className="h-[300px] sm:h-[400px] xl:h-[500px] w-full">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <img src={result1} alt="..." />
        <img src={result2} alt="..." />
        <img src={result3} alt="..." />
        <img src={result4} alt="..." />
        <img src={result5} alt="..." />
      </Carousel>
    </div>
    {/* <p className="text-pretty text-center lg:text-start">Creemos en la belleza de cada individuo y en la capacidad de la cirugía plástica para realzarla. A través de los casos que compartimos, te invitamos a explorar las transformaciones asombrosas que la Dra. Maria Baeza ha logrado para sus pacientes. Desde rinoplastias que mejoran la armonía facial hasta bichectomías que resaltan los rasgos naturales, cada caso muestra resultados excepcionales y naturales. Sumérgete en estos casos y descubre cómo la Dra.Maria Baeza puede ayudarte a lograr la mejor versión de ti mismo/a.</p> */}
  </section>
  );
};

export { Results };
