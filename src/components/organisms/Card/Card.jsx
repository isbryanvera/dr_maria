import { ViewMoreIcon } from '../../../assets/svg/ViewMoreIcon';
import { TreatmentIcon } from '../../../assets/svg/TreatmentIcon';

const Card = ({title,hook}) => {
  return (
    <article className='bg-white drop-shadow-md flex flex-col justify-between h-[300px] py-8 px-4 items-center rounded-lg'>
      <div className='flex flex-col gap-4 items-center' >
        <TreatmentIcon/>
        <h3 className='font-medium text-2xl	text-center'>{title}</h3>
        <p className='text-center'>{hook}</p>
      </div>
      <a className='flex cursor-pointer gap-2 justify-end' href='/tratamientos'>
        <p className='font-medium'>Ver mas</p>
        <ViewMoreIcon/>
      </a>
    </article>
  );
};

export { Card };
