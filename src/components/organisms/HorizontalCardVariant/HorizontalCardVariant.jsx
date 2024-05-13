
const HorizontalCardVariant = () => {
  return (
    <div className="flex justify-around z-10 relative w-full max-w-5xl mx-auto bg-[#E6F6FE] p-8 rounded-lg">
      <div className="flex flex-col gap-4 w-1/2">
        <h3 className="text-4xl text-balance">Razones para tomar esta desicion</h3>
        <p className="text-pretty">Te ofrezco procedimientos de alta calidad, con una experiencia excepcional desde el primer contacto hasta tu recuperación. Al elegirnos, obtendrás:</p>
        <ul>
          <li><span>*</span>Resultados Naturales</li>
          <li><span>*</span>Atención Personalizada</li>
          <li><span>*</span>Tecnología de Vanguardia</li>
          <li><span>*</span>Confianza y Seguridad</li>
          <li><span>*</span>Profesionalismo y Experiencia</li>
        </ul>
      </div>
      <figure className="aspect-square h-[326px]">
        <img className="rounded-lg w-full h-full object-cover object-center" src="https://images.pexels.com/photos/7447005/pexels-photo-7447005.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </figure>
    </div>
  );
};

export { HorizontalCardVariant };
