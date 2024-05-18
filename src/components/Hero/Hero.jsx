import { Badge } from "../Badge/Badge";
import { CallToAction } from "../CallToAction/CallToAction";

const Hero = () => {
  return (
    <section className="flex flex-col z-10 gap-10 items-center lg:flex-row lg:justify-between lg:h-[500px] lg:gap-0">
      <div className="flex flex-col gap-12 lg:w-[45%]">
        <div className="flex flex-col gap-6 text-center lg:text-start">
          <h1 className="text-6xl text-pretty">Tu <span className="text-blue-700">belleza</span>, mi especialidad</h1>
          <p className="text-pretty">Mereces ser la mejor versión de ti mismo, <span className="font-medium	">estoy aquí para realzar tu belleza de manera segura y profesional</span>  , con procedimientos de alta calidad brindandote resultados excepcionales y un cuidado personalizado. </p>
        </div>
        <div className="flex gap-12 items-center justify-center lg:justify-start">
          <Badge></Badge>
          <CallToAction/>
        </div>
      </div>
      <div className="relative lg:w-1/2">
        <figure className="flex justify-between gap-3 h-full">
          <img className="h-auto w-1/2 max-w-[308px]	self-end" src="./src/assets/images/foto1.png" alt="" />
          <img className="h-auto w-1/2	max-w-[308px] self-start" src="./src/assets/images/foto2.png" alt="" />
        </figure>
        <div className="bg-white p-2 text-center absolute bottom-6 right-6 shadow-md max-w-[500px] rounded-xl">
          <p className="text-blue-500 font-medium	">Cirujana facial y experta en rinoplastia. Te ayudará a buscar el equilibro entre la salud y la belleza.</p>
        </div>
      </div>
    </section>
  );
};



export { Hero };