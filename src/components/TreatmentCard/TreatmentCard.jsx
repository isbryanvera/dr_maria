import { CallToAction } from "../CallToAction/CallToAction";

const TreatmentCard = ({title,description,image,isReversed}) => {
  return (
    <div className="flex items-center flex-col gap-6 lg:flex-row justify-around w-full relative before:h-full before:top-[10%] before:absolute before:w-full before:bg-[#E6F6FE] before:rounded-3xl">
      <figure className={`w-[380px] aspect-square z-10  ${isReversed ? 'lg:order-2' : ''}`}>
        <img className="w-full h-full object-cover rounded-2xl" src={image} alt="" />
      </figure>
      <div className={`w-4/5 flex flex-col items-center gap-6 z-10 ${isReversed ? 'lg:order-1' : ''} lg:w-1/2 lg:items-start`}>
        <h3 className="text-4xl text-medium text-center lg:text-left">{title}</h3>
        <p>{description}</p>
        <CallToAction></CallToAction>
      </div>
    </div>
  );
};

export { TreatmentCard };
