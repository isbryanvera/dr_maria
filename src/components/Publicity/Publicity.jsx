// import { Blob2 } from '../../assets/svg/Blob2';
import { CallToAction } from '../CallToAction/CallToAction';

const Publicity = () => {
  return (
    <div className="utility-1 relative flex flex-col gap-8">
      {/* <Blob2 className='absolute -top-1/2 right-60 -z-10'/> */}
      <div className="bg-white p-2 text-center shadow-md text-xl rounded-xl max-w-5xl mx-auto">
        <p className="text-blue-500 ">“Mi objetivo es la satisfacción de mis pacientes, ayudarles a mejorar su salud, en todos los sentidos, con una mejor versión de sí mismos”</p>
      </div>
      <section className="w-full py-[72px] z-50 p-5  bg-[#011632] text-white">
        <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
          <h3 className="text-4xl ">Tu mejor versión al alcance de tus manos</h3>
          <p> Cada persona merece sentirse segura, hermosa y segura de sí misma. Estoy aquí para ayudarte a alcanzar tu mejor versión. Estás a solo un clic de distancia de dar el primer paso hacia una transformación que cambiará tu vida para siempre. ¿Estás listo/a para descubrir tu potencial completo?</p>
          <CallToAction/>
        </div>
      </section>
    </div>
  );
};

export { Publicity };
