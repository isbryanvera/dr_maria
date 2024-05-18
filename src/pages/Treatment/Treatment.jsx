import { TreatmentCard } from "../../components/TreatmentCard/TreatmentCard";
import treatmentCard from '../../services/data/treatments.json';


const Treatment = () => {
  return (
    <>
      <h2 className="text-6xl">Tratamientos</h2>
      {treatmentCard.map((card, index) => {
        const isReversed = index % 2 === 0;
        return(
          <TreatmentCard {...card} isReversed={isReversed} key={index}/>
        )
      })}
    </>
  );
};

export { Treatment };
