import imgAboutMe from '../../assets/images/Doctor.png';

const Biography = () => {
  return (
    <div className="flex flex-col w-full items-center lg:items-start lg:flex-row gap-12">
      <div className="flex flex-col items-center gap-6 w-full">
          <figure className="w-1/3 sm:min-w-[400px] min-w-[280px]">
            <img className="w-full h-full object-cover" src={imgAboutMe} alt="" />
          </figure>
          <div className='flex flex-col gap-4 max-w-4xl'>
            <h2 className="text text-4xl font-medium text-center">Dra Ángeles Baeza</h2>
            <p>La Dra. Ángeles Baeza estudió medicina en la Universidad de los Andes. Luego realizó la especialidad de Otorrinolaringología en la Pontificia Universidad Católica de Chile, y la subespecialidad en cirugía plástica facial en la Universidad de Chile.
            Actualmente se encuentra trabajando en la Clínica Las Condes y en el Centro médico ORL LAS CONDES, donde atiende pacientes pediátricos y adultos que requieran ayuda en el área otorrinolaringológica y especialmente en el área de la cirugía plástica facial. Cuenta con más de 13 años de experiencia médica y quirúrgica.</p>
          </div>
      </div>
    </div>
  );
};

export { Biography };
