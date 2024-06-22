import { Biography } from "../../components/Biography/Biography";
import { MoreInfo } from "../../components/MoreInfo/MoreInfo";

const AboutUs = () => {
  return (
    <>
      <Biography/>
      <div className="w-full flex items-center flex-col gap-8">
        <div className="flex flex-col gap-6 items-center max-w-2xl">
            <h1 className="text-4xl text-pretty font-medium text-center">Conoce más <span className="text-blue-700">sobre mi</span></h1>
        </div>
        <div className="flex justify-center w-full">
        <iframe  className="rounded-2xl" width="350" height="622" src="https://www.youtube.com/embed/4u8khpFMWMs" title="Presentación Dra Ángeles Baeza" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </div>
      </div>

      <MoreInfo/>
    </>
  );
};

export { AboutUs };
