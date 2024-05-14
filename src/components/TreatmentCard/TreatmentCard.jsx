import { CallToAction } from "../CallToAction/CallToAction";

const TreatmentCard = ({url, isReversed}) => {
  return (
    <div className="flex items-center flex-col lg:flex-row justify-around w-full relative before:h-4/5 before:top-[10%] before:absolute before:w-full before:bg-[#E6F6FE] before:rounded-3xl">
      <figure className={`w-[380px] aspect-square z-10  ${isReversed ? 'lg:order-2' : ''}`}>
        <img className="w-full h-full object-cover rounded-2xl" src={url} alt="" />
      </figure>
      <div className={`w-4/5 flex flex-col items-center gap-6 z-10 ${isReversed ? 'lg:order-1' : ''} lg:w-1/2 lg:items-start`}>
        <h3 className="text-4xl text-medium text-center lg:text-left">Rinoplastia</h3>
        <p>La rinoplastia es un procedimiento quirúrgico que se realiza para mejorar la forma, el tamaño o la función de la nariz. Esta cirugía puede corregir problemas estéticos como una nariz grande, una punta nasal caída o una giba nasal, así como problemas respiratorios como desviaciones del tabique nasal. Las ventajas de la rinoplastia incluyen una apariencia facial más equilibrada, una mejor respiración y una mayor confianza en uno mismo.</p>
        <CallToAction></CallToAction>
      </div>
    </div>
  );
};

export { TreatmentCard };
