import './Card.module.css';

const Card = () => {
  return (
    <article className='bg-white drop-shadow-md flex flex-col gap-10 p-8 items-center rounded-lg'>
      <div className='flex flex-col gap-4 items-center' >
        <span>Icono</span>
        <h3 className='font-medium text-2xl	'>Rinoplastia</h3>
        <p className='text-center'>Transforma tu nariz con nuestro procedimiento de rinoplastia experto.</p>
      </div>
      <div className='flex'>
        <p className='font-medium'>Ver mas</p>
        <span> + </span>
      </div>
    </article>
  );
};

export { Card };
