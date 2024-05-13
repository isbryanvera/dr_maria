import { Hero } from "../../components/Hero/Hero";
import { Blob } from "../../assets/svg/Blob";
import { Blob2 } from "../../assets/svg/Blob2";
import { Grid } from "../../components/layouts/Grid/Grid";
import { Card } from "../../components/organisms/Card/Card";
import { Carousel } from "flowbite-react";
import { HorizontalCard } from "../../components/organisms/HorizontalCard/HorizontalCard";
import { HorizontalCardVariant } from "../../components/organisms/HorizontalCardVariant/HorizontalCardVariant";
import { MoreInfo } from "../../components/MoreInfo/MoreInfo";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Blob className='absolute -top-10 w-[800px] right-[15%]'/>

      <section className="flex flex-col gap-8 items-center relative">
        <Blob2 className='absolute top-0'/>
        <h2 className="text-6xl text-pretty">Mis Tratamientos</h2>
        <p className="max-w-[836px] text-center">Te puedo ayudar en una amplia variedad de procedimientos diseñados para realzar tu belleza de manera natural y segura. Cada procedimiento está realizado con precisión y cuidado para garantizar resultados excepcionales que te harán sentir seguro y radiante.</p>
        <Grid>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Grid>
      </section>

      <section className="flex flex-col items-center gap-8 w-full">
        <h2 className="text-6xl text-pretty">Mis Pacientes</h2>
        <div className="h-56 sm:h-64 xl:h-[500px] w-full">
          <Carousel pauseOnHover>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
          </Carousel>
        </div>
        <p className="text-pretty">Creemos en la belleza de cada individuo y en la capacidad de la cirugía plástica para realzarla. A través de los casos que compartimos, te invitamos a explorar las transformaciones asombrosas que la Dra. Maria Baeza ha logrado para sus pacientes. Desde rinoplastias que mejoran la armonía facial hasta bichectomías que resaltan los rasgos naturales, cada caso muestra resultados excepcionales y naturales. Sumérgete en estos casos y descubre cómo la Dra.Maria Baeza puede ayudarte a lograr la mejor versión de ti mismo/a.</p>
      </section>

      <section className="flex flex-col gap-16 w-full">
        <HorizontalCard></HorizontalCard>
        <HorizontalCardVariant></HorizontalCardVariant>
        <HorizontalCard></HorizontalCard>
      </section>

      <section className="utility-1 py-[72px] bg-[#011632] text-white">
        <div className="flex flex-col gap-8 w-full max-w-5xl	mx-auto">
          <h3 className="text-4xl">Tu mejor versión al alcance de tus manos</h3>
          <p> Cada persona merece sentirse segura, hermosa y segura de sí misma. Estoy aquí para ayudarte a alcanzar tu mejor versión. Estás a solo un clic de distancia de dar el primer paso hacia una transformación que cambiará tu vida para siempre. ¿Estás listo/a para descubrir tu potencial completo?</p>
        </div>
      </section>

      <div className="bg-white p-2 text-center shadow-md max-w-full text-2xl rounded-xl">
          <p className="text-blue-500 ">“Mi objetivo es la satisfacción de mis pacientes, ayudarles a mejorar su salud, en todos los sentidos, con una mejor versión de sí mismos”</p>
      </div>

      <MoreInfo/>
    </>
  );
};

export { Home };
