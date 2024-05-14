import { TreatmentCard } from "../../components/TreatmentCard/TreatmentCard";

const Treatment = () => {
  return (
    <>
      <h2 className="text-6xl">Tratamientos</h2>
      <TreatmentCard  url={"/src/assets/images/ejemploResult.png"}></TreatmentCard>
      <TreatmentCard isReversed={true} url={"/src/assets/images/ejemploResult2.png"}></TreatmentCard>
      <TreatmentCard  url={"/src/assets/images/ejemploResult.png"}></TreatmentCard>
      <TreatmentCard isReversed={true} url={"/src/assets/images/ejemploResult2.png"}></TreatmentCard> 
      <TreatmentCard  url={"/src/assets/images/ejemploResult.png"}></TreatmentCard>
      <TreatmentCard  isReversed={true} url={"/src/assets/images/ejemploResult2.png"}></TreatmentCard> 
    </>
  );
};

export { Treatment };
