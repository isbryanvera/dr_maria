import { Avatar } from "flowbite-react";

const Form = () => {
  return (
    <section className="flex flex-col items-center gap-8 bg-white px-8 py-10 rounded-3xl ">
      <div className="flex flex-wrap gap-2">
        <Avatar size="xl" img="/src/assets/svg/Profile.svg" status="online" />
      </div>
      <h3 className="font-medium text-blue-500 text-2xl">¿Como puedo ayudarte?</h3>
      <form className="w-full max-w-md mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block text-lg tracking-wide text-blue-500 font-medium mb-2" htmlFor="name">
              Nombre
            </label>
            <input className="rounded-full appearance-none block w-full bg-[#f3f1ec4a] border-none py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Juan Pérez" />
          </div>
          <div className="w-full px-3 mt-6">
            <label className="block text-lg tracking-wide text-blue-500 font-medium mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input className="rounded-full appearance-none block w-full bg-[#f3f1ec4a] border-none py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="juanperez@example.com" />
          </div>
          <div className="w-full px-3 mt-6">
            <label className="block text-lg tracking-wide text-blue-500 font-medium mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea className="appearance-none rounded-xl block w-full bg-[#f3f1ec4a] border-none py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="message" placeholder="Escribe tu mensaje aquí..." rows="5"></textarea>
          </div>
          <div className="w-full px-3 mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium w-full rounded-full py-2 px-4 focus:outline-none focus:shadow-outline" type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export { Form };
