import { WhatsAppIcon } from "../../assets/svg/WhatsAppIcon";

const CallToAction = () => {
  return (
    <a  className={`bg-blue-700 text-white p-4 rounded-xl max-w-fit cursor-pointer flex gap-2 items-center`}
        href="https://wa.me/5493624538033?text=Hola%20estoy%20interesado%20en%20agendar%20una%20cita"
        target="blank" >
      Agenda tu cita
      <WhatsAppIcon className='w-[26px]'/>
    </a>
  );
}

export { CallToAction };
