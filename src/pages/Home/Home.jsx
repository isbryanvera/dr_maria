import { Hero } from "../../components/Hero/Hero";
import { Blob } from "../../assets/svg/Blob";
import { HorizontalCard } from "../../components/organisms/HorizontalCard/HorizontalCard";
import { TratementsList } from "../../components/TratementsList/TratementsList";
import { Results } from "../../components/Results/Results";
import { MoreInfo } from "../../components/MoreInfo/MoreInfo";
import imgTeam from "../../assets/images/team.jpeg";
// -- Data
import dataCard from '../../services/data/dataCards.json';

const Home = () => {
  return (
    <>
      <Hero/>
      <Blob className='absolute -top-10 w-[800px] right-[15%]'/>
      <TratementsList/>
      <Results/>
      <section className="flex flex-col gap-16 w-full">
        {dataCard.map((card, index) => (
          <HorizontalCard {...card} key={index} imagen={imgTeam}/>
        ))}
      </section>
      <div className="bg-white p-2 text-center shadow-md text-xl rounded-xl max-w-5xl mx-auto">
        <p className="text-blue-500 ">“Lo que mas me gusta de mi profesión es ayudar a las personas a sentirse mejor consigo misma, recuperar su confianza, y mejorar la funcionalidad de su nariz.
Disfruto el contacto cercano y la relación que tengo con mis pacientes.”</p>
      </div>
      <MoreInfo/>
    </>
  );
};

export { Home };
