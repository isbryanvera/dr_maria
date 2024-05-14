import { Hero } from "../../components/Hero/Hero";
import { Blob } from "../../assets/svg/Blob";
import { HorizontalCard } from "../../components/organisms/HorizontalCard/HorizontalCard";
import { TratementsList } from "../../components/TratementsList/TratementsList";
import { Results } from "../../components/Results/Results";
import { HorizontalCardVariant } from "../../components/organisms/HorizontalCardVariant/HorizontalCardVariant";
import { MoreInfo } from "../../components/MoreInfo/MoreInfo";
import { Publicity } from "../../components/Publicity/Publicity";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Blob className='absolute -top-10 w-[800px] right-[15%]'/>
      <TratementsList/>
      <Results/>
      <section className="flex flex-col gap-16 w-full">
        <HorizontalCard></HorizontalCard>
        <HorizontalCardVariant></HorizontalCardVariant>
        <HorizontalCard></HorizontalCard>
      </section>
      <Publicity/>
      <MoreInfo/>
    </>
  );
};

export { Home };
