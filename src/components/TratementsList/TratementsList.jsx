import { Card } from '../organisms/Card/Card';
import { Blob2 } from '../../assets/svg/Blob2';
import { Grid } from '../layouts/Grid/Grid';
// --data
import treatmentCard from '../../services/data/treatments.json';

const TratementsList = () => {
  return (
    <section className="flex flex-col gap-8 items-center relative">
        <Blob2 className='absolute top-0 w-full max-w-[812px] aspect-square'/>
        <h2 className="text-3xl md:text-6xl text-pretty">Mis Tratamientos</h2>
        <p className="max-w-[836px] text-center">Te puedo ayudar en una amplia variedad de procedimientos diseñados de manera natural y segura.</p>
        <Grid>
          {treatmentCard.map(({title,hook}, index) => (
            <Card title={title} hook={hook} key={index}/>
          ))}
        </Grid>
    </section>
  );
};

export { TratementsList };
