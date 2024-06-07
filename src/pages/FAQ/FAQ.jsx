import './FAQ.module.css';
import { Accordion } from "flowbite-react";

const FAQ = () => {
  return (
    <>
      <h2 className='text-6xl'>FAQs</h2>
      <div className='w-full'>
        <div>
          <Accordion className='w-full'>
            <Accordion.Panel >
              <Accordion.Title className='w-full'>¿Cómo puedo agendar una consulta?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Debes comunicarte al WhatsApp o rellenar el formulario que está a disposición en esta
                  página web.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>¿Dónde se encuentra la doctora?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                En la Clínica ORL - Las Condes, la dirección es Estoril 651, Las Condes, Santiago, Chile.
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
              <Accordion.Title>¿Cuánto cuesta un procedimiento facial?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Esta es una de las preguntas más frecuentes, y el valor va a depender de diferentes factores, por
                el cual es necesario evaluar tu caso en consulta en primera instancia.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </>

  );
};

export { FAQ };
