// import { Publicity } from '../../components/Publicity/Publicity';
import { Results } from '../../components/Results/Results';
import { Accordion } from "flowbite-react";
import './Rinoplastia.module.css';

const Rinoplastia = () => {
  return (
    <>
      <section className='w-full flex flex-col gap-20'>
        <div className='flex flex-col md:flex-row justify-between w-full gap-16'>
          <figure className='aspect-square md:w-2/5 relative lg:before:absolute  lg:before:-right-[30px] lg:before:-top-[30px] lg:before:h-full lg:before:w-full lg:before:bg-[#E6F6FE]	lg:before:rounded-lg'>
            <img className='w-full h-full relative z-10 object-cover rounded-lg'
              src="https://images.pexels.com/photos/12454223/pexels-photo-12454223.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </figure>
          <div className='flex flex-col gap-8 md:w-3/5'>
            <h2 className='text-balance text-6xl text-center md:text-start'>Rinoplastia</h2>
            <p className='text-pretty'>La rinoplastía es una cirugía que busca mejorar la forma de la nariz para lograr una imagen lo más acorde posible a tu cara y a tus expectativas. Puede ser solo estética o también incorporar el manejo de la parte funcional, permitiendo una mejoría importante de la respiración según cada caso.
            </p>
            <p className='text-pretty'>En esta cirugía ocupamos equipos de último nivel en busca de disminuir el edema y optimizar los resultados.</p>
            <hr />
            {/* <div className='flex justify-between'>
              <Tag></Tag>
              <Tag></Tag>
              <Tag></Tag>
              <Tag></Tag>
            </div> */}
          </div>
        </div>
        {/* <div className='flex flex-col items-center gap-14'>
          <h3 className='self-start text-4xl '>Procedimiento</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Non non velit consequat eget odio mauris aliquam nisi praesent. Ultrices posuere quisque imperdiet sem elit eu eu interdum in. Pellentesque tempor vestibulum duis lobortis sit. Dui purus ornare mattis mattis lobortis. Aenean dictum amet nibh est sit sit tristique in. Vulputate amet sed lectus consequat consectetur urna leo quis porttitor. Mauris mus erat tellus sollicitudin elementum ridiculus purus. Eget egestas magna tortor sed id ipsum nisi. In urna proin faucibus cum interdum donec nec viverra. Habitasse duis a tempor suspendisse nisl morbi purus velit. Arcu molestie pharetra dui dignissim pellentesque dictum suscipit eu. Sit tellus et enim montes est sed. Pharetra augue lacus lorem nisi convallis eleifend aliquam leo. Tortor neque molestie amet rutrum facilisi sed etiam fermentum.</p>
          <figure className='w-full aspect-video max-w-[830px] bg-gray-400'>
            <img src="" alt="Imagen" />
          </figure>
          <p>Lorem ipsum dolor sit amet consectetur. Non non velit consequat eget odio mauris aliquam nisi praesent. Ultrices posuere quisque imperdiet sem elit eu eu interdum in. Pellentesque tempor vestibulum duis lobortis sit. Dui purus ornare mattis mattis lobortis. Aenean dictum amet nibh est sit sit tristique in. Vulputate amet sed lectus consequat consectetur urna leo quis porttitor. Mauris mus erat tellus sollicitudin elementum ridiculus purus. Eget egestas magna tortor sed id ipsum nisi. In urna proin faucibus cum interdum donec nec viverra. Habitasse duis a tempor suspendisse nisl morbi purus velit. Arcu molestie pharetra dui dignissim pellentesque dictum suscipit eu. Sit tellus et enim montes est sed. Pharetra augue lacus lorem nisi convallis eleifend aliquam leo. Tortor neque molestie amet rutrum facilisi sed etiam fermentum.</p>
          <p>Lorem ipsum dolor sit amet consectetur. Non non velit consequat eget odio mauris aliquam nisi praesent. Ultrices posuere quisque imperdiet sem elit eu eu interdum in. Pellentesque tempor vestibulum duis lobortis sit. Dui purus ornare mattis mattis lobortis. Aenean dictum amet nibh est sit sit tristique in. Vulputate amet sed lectus consequat consectetur urna leo quis porttitor. Mauris mus erat tellus sollicitudin elementum ridiculus purus. Eget egestas magna tortor sed id ipsum nisi. In urna proin faucibus cum interdum donec nec viverra. Habitasse duis a tempor suspendisse nisl morbi purus velit. Arcu molestie pharetra dui dignissim pellentesque dictum suscipit eu. Sit tellus et enim montes est sed. Pharetra augue lacus lorem nisi convallis eleifend aliquam leo. Tortor neque molestie amet rutrum facilisi sed etiam fermentum.</p>
          <div className='flex w-full gap-9'>
            <figure className='w-1/2 aspect-square bg-gray-400'>
              <img src="" alt="Imagen" />
            </figure>
            <figure className='w-1/2 aspect-square bg-gray-400'>
              <img src="" alt="Imagen" />
            </figure>
          </div>
        </div> */}
      </section>
      {/* <div className='flex flex-col items-center gap-14'>
        <h3 className='self-start text-4xl'>Procedimiento</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Non non velit consequat eget odio mauris aliquam nisi praesent. Ultrices posuere quisque imperdiet sem elit eu eu interdum in. Pellentesque tempor vestibulum duis lobortis sit. Dui purus ornare mattis mattis lobortis. Aenean dictum amet nibh est sit sit tristique in. Vulputate amet sed lectus consequat consectetur urna leo quis porttitor. Mauris mus erat tellus sollicitudin elementum ridiculus purus. Eget egestas magna tortor sed id ipsum nisi. In urna proin faucibus cum interdum donec nec viverra. Habitasse duis a tempor suspendisse nisl morbi purus velit. Arcu molestie pharetra dui dignissim pellentesque dictum suscipit eu. Sit tellus et enim montes est sed. Pharetra augue lacus lorem nisi convallis eleifend aliquam leo. Tortor neque molestie amet rutrum facilisi sed etiam fermentum.</p>
        <figure className='w-full aspect-video max-w-[830px] bg-gray-400'>
          <img src="" alt="Imagen" />
        </figure>
        <p>Lorem ipsum dolor sit amet consectetur. Non non velit consequat eget odio mauris aliquam nisi praesent. Ultrices posuere quisque imperdiet sem elit eu eu interdum in. Pellentesque tempor vestibulum duis lobortis sit. Dui purus ornare mattis mattis lobortis. Aenean dictum amet nibh est sit sit tristique in. Vulputate amet sed lectus consequat consectetur urna leo quis porttitor. Mauris mus erat tellus sollicitudin elementum ridiculus purus. Eget egestas magna tortor sed id ipsum nisi. In urna proin faucibus cum interdum donec nec viverra. Habitasse duis a tempor suspendisse nisl morbi purus velit. Arcu molestie pharetra dui dignissim pellentesque dictum suscipit eu. Sit tellus et enim montes est sed. Pharetra augue lacus lorem nisi convallis eleifend aliquam leo. Tortor neque molestie amet rutrum facilisi sed etiam fermentum.</p>
        <p>Lorem ipsum dolor sit amet consectetur. Non non velit consequat eget odio mauris aliquam nisi praesent. Ultrices posuere quisque imperdiet sem elit eu eu interdum in. Pellentesque tempor vestibulum duis lobortis sit. Dui purus ornare mattis mattis lobortis. Aenean dictum amet nibh est sit sit tristique in. Vulputate amet sed lectus consequat consectetur urna leo quis porttitor. Mauris mus erat tellus sollicitudin elementum ridiculus purus. Eget egestas magna tortor sed id ipsum nisi. In urna proin faucibus cum interdum donec nec viverra. Habitasse duis a tempor suspendisse nisl morbi purus velit. Arcu molestie pharetra dui dignissim pellentesque dictum suscipit eu. Sit tellus et enim montes est sed. Pharetra augue lacus lorem nisi convallis eleifend aliquam leo. Tortor neque molestie amet rutrum facilisi sed etiam fermentum.</p>
        <div className='flex w-full gap-9'>
          <figure className='w-1/2 aspect-square bg-gray-400'>
            <img src="" alt="Imagen" />
          </figure>
          <figure className='w-1/2 aspect-square bg-gray-400'>
            <img src="" alt="Imagen" />
          </figure>
        </div>
      </div> */}
      <div className='flex flex-col gap-10'>
        <h3 className='text-4xl'>Conoce mas sobre el procedimiento</h3>
        <div className="flex justify-center w-full">
          <iframe className="w-full max-w-4xl rounded-2xl"
            width="560"
            height="400"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>
      <Accordion className='w-full'>
        <Accordion.Panel >
          <Accordion.Title className='w-full'>¿DUELE LA RINOPLASTIA?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Esta es una cirugía muy poco dolorosa. El postoperatorio es más bien incómodo, pero generalmente no se siente nada de dolor.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>¿SE USAN TAPONES?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            No, en general se usan unas placas de silicona que tienen unos tubos por los cuáles se puede respirar.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>¿A LOS CUANTOS DÍAS PODRÉ TRABAJAR?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Tendrás que esperar alrededor de 15 días.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel >
          <Accordion.Title className='w-full'>¿CUANTOS DÍAS
USANDO LAS TELAS?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Es variable, depende del tipo de piel y de la evolución. Hay pacientes que usan tres semanas y otros que usan algunos meses
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>¿CUANTOS DÍAS SIN HACER DEPORTE?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Se recomienda estar de 4-6 semanas sin hacer ejercicio después de una rinoplastia.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      <Results />
    </>


  );
};

// const Tag = () => {
//   return (
//     <div className='flex gap-4 flex-col items-center text-center'>
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//       </svg>
//       <p className='w-fit'>Tiempo quirúrgico</p>
//       <p className='w-fit'>3 horas</p>
//     </div>
//   );
// }

export { Rinoplastia };
