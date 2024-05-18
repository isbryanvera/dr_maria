import { Form } from "../../components/Form/Form";
import { Map } from "../../components/Map/Map";

const MoreInfo = () => {
  return (
    <section className="relative flex flex-col gap-8 lg:gap-4">
      <Form isMain={true}/>
      <Map/>
      <div className="flex gap-2 self-center lg:self-end">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>
        <p>Estoril 651, 7591090 Las Condes, Región Metropolitana</p>
      </div>
    </section>
  );
};

export { MoreInfo };
