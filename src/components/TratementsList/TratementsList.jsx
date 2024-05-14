import { Card } from '../organisms/Card/Card';
import { Blob2 } from '../../assets/svg/Blob2';
import { Grid } from '../layouts/Grid/Grid';

const TratementsList = () => {
  return (
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
  );
};

export { TratementsList };
