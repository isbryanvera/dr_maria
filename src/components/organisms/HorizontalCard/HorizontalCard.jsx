import './HorizontalCard.module.css';

const HorizontalCard = () => {
  return (
    <div className='flex justify-between w-full max-w-5xl	mx-auto'>
      <figure className='aspect-square h-[326px] relative before:absolute  before:-right-[30px] before:-top-[30px] before:h-[326px] before:w-[326px] before:bg-[#E6F6FE]	before:rounded-lg'>
        <img className='w-full h-full relative z-10 object-cover rounded-lg' 
        src="https://images.pexels.com/photos/12454223/pexels-photo-12454223.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </figure>
      <div className='flex flex-col gap-8 max-w-[565px]'>
        <h3 className='text-balance text-4xl'>5 Años de experiencia en procedimientos de Rinoplastia</h3>
        <p className='text-pretty'>Entiendo que tomar la decisión de someterte a un procedimiento estético puede generar dudas y preocupaciones. Por eso, estoy aquí para ofrecerte tranquilidad y confianza en cada paso del camino. </p>
        <button className='p-4 bg-blue-500 text-white rounded-lg w-fit'>Rinoplastia</button>
      </div>
    </div>
  );
};

export { HorizontalCard };