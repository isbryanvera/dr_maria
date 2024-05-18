const HorizontalCard = ({title,description,image,urlCallToAction,nameCallToAction}) => {
  return (
    <div className='flex flex-col justify-between w-full max-w-5xl	mx-auto lg:flex-row lg:gap-0 gap-8'>
      <figure className='aspect-square h-[326px] relative lg:before:absolute  lg:before:-right-[30px] lg:before:-top-[30px] lg:before:h-[326px] lg:before:w-[326px] lg:before:bg-[#E6F6FE]	lg:before:rounded-lg'>
        <img className='w-full h-full relative z-10 object-cover rounded-lg' 
        src={image} alt={title} />
      </figure>
      <div className='flex flex-col gap-8 lg:max-w-[565px] self-center'>
        <h3 className='text-balance text-4xl font-medium'>{title}</h3>
        <p className='text-pretty'>{description}</p>
        <a href={urlCallToAction} className='p-4 bg-blue-700 text-white rounded-lg w-fit self-center'>{nameCallToAction}</a>
      </div>
    </div>
  );
};

export { HorizontalCard };