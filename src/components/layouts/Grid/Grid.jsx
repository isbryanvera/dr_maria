const Grid = ({children}) => {
  return (
    <section className='grid gap-8 grid-cols-[repeat(1,_minmax(230px,224px))] md:grid-cols-[repeat(3,_minmax(190px,224px))] lg:grid-cols-[repeat(3,_minmax(320px,380px))] grid-rows-auto justify-center'>
      {children}
    </section>
  );
};

export { Grid };
