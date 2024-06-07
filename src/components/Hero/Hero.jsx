import { Badge } from "../Badge/Badge";
import { CallToAction } from "../CallToAction/CallToAction";
import imgDoc1 from "../../assets/images/foto1.png";
import imgDoc2 from "../../assets/images/foto2.png";

const Hero = () => {
  return (
    <section className="flex flex-col z-10 gap-10 items-center lg:flex-row lg:justify-between lg:h-[500px] lg:gap-0">
      <div className="flex flex-col gap-12 lg:w-[45%]">
        <div className="flex flex-col gap-6 text-center lg:text-start">
          <h1 className="text-6xl text-pretty"><span className="text-blue-700">Especialista</span> en rinoplastia y cirugía plástica facial</h1>
          {/* <p className="text-pretty">Mereces ser la mejor versión de ti mismo, <span className="font-medium	">estoy aquí para realzar tu belleza de manera segura y profesional</span>  , con procedimientos de alta calidad brindandote resultados excepcionales y un cuidado personalizado. </p> */}
        </div>
        <div className="flex gap-12 items-center justify-center lg:justify-start">
          <Badge></Badge>
          <CallToAction/>
        </div>
      </div>
      <div className="relative lg:w-1/2">
        <figure className="flex gap-3 h-full">
          <img className="h-auto w-full sm:w-1/2 max-w-[258px] self-end rounded-xl relative lg:top-[-60px]" src={imgDoc1} alt="Foto alusiva a la doctora" />
          <img className="h-auto w-1/2	max-w-[258px] self-start rounded-xl hidden sm:block" src={imgDoc2} alt="Foto alusiva a la doctora" />
        </figure>
      </div>
    </section>
  );
};



export { Hero };