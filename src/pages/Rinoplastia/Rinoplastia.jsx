import { Publicity } from '../../components/Publicity/Publicity';
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
            <p className='text-pretty'>La rinoplastia ultrasónica es una de las técnicas más avanzadas de cirugía estética nasal. Recibe ese nombre porque en la intervención se utiliza un dispositivo ultrasónico que remodela la nariz con un menor impacto que en otros tipos de rinoplastia.</p>
            <p className='text-pretty'>En estos procesos, el grado de control a la hora de modelar y cortar los huesos nasales es casi absoluto. A su vez, otras estructuras de la nariz no se ven afectadas. Todo ello conlleva un mejor resultado estético y una recuperación más rápida, con menos complicaciones en el posoperatorio.</p>
            <hr />
            <div className='flex justify-between'>
              <Tag></Tag>
              <Tag></Tag>
              <Tag></Tag>
              <Tag></Tag>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-14'>
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
        </div>
      </section>
      <Publicity />
      <div className='flex flex-col items-center gap-14'>
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
      </div>
      <Results />
      <Accordion className='w-full'>
        <Accordion.Panel >
          <Accordion.Title className='w-full'>What is Flowbite?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
              dropdowns, modals, navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is there a Figma file available?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
              has a design equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the
              <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas
              Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
              components, whereas Tailwind UI offers sections of pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
              technical reason stopping you from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel >
          <Accordion.Title className='w-full'>What is Flowbite?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
              dropdowns, modals, navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is there a Figma file available?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
              has a design equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the
              <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas
              Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
              components, whereas Tailwind UI offers sections of pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
              technical reason stopping you from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>


  );
};

const Tag = () => {
  return (
    <div className='flex gap-4 flex-col items-center text-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      <p className='w-fit'>Tiempo quirúrgico</p>
      <p className='w-fit'>3 horas</p>
    </div>
  );
}

export { Rinoplastia };
