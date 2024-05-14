import { Biography } from "../../components/Biography/Biography";
import { MoreInfo } from "../../components/MoreInfo/MoreInfo";

const AboutUs = () => {
  return (
    <>
      <Biography/>
      <div className="flex flex-col gap-12 items-center">
        <h3 className="text-4xl font-medium">Garantía de calidad y profesionalismo</h3>
        <p className="">La calidad y profesionalismo son valores indispensables en mi profesion. Me enorgullece de contar con las certificaciones y afiliaciones más prestigiosas en el campo de la cirugía plástica y reconstructiva. Cuento con las certificaciones [Incluir certificaciones relevantes], lo que garantiza respalda mi experiencia y competencia en el campo. Además, soy miembro orgullosa de [Incluir afiliaciones relevantes], lo que refleja mi compromiso con los más altos estándares de ética y práctica médica. Puedes confiar en mi para brindarte la mejor atención y resultados excepcionales.</p>
      </div>

      <div className="w-full flex items-center flex-col gap-8">
        <div className="flex flex-col gap-6 items-center max-w-2xl">
            <h1 className="text-4xl text-pretty font-medium text-center">Estoy ansiosa por conocerte <span className="text-blue-700">agenda hoy mismo</span></h1>
            <p className="text-pretty text-center">Sólo uso materiales de la mejor calidad del mercado para poder ofrecer los mejores tratamientos a mis pacientes.</p>
        </div>
        <div className="flex justify-center w-full">
          <iframe className="w-full max-w-4xl rounded-2xl"
            width="560" 
            height="400" 
            src="https://www.youtube.com/embed/VIDEO_ID" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
      </div>
      </div>

      <MoreInfo/>
    </>
  );
};

export { AboutUs };
