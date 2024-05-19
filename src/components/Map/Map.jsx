import map from "../../assets/images/maps.png";

const Map = () => {
  return (
    <a className="w-full  cursor-pointer" target="blank" href="https://www.google.com/maps?ll=-33.387053,-70.530525&z=18&t=m&hl=es-419&gl=CL&mapclient=embed&cid=13709932103716970485">
      <img className="w-full lg:min-h-[730px] object-cover rounded-2xl" src={map} alt="Dirección de consulta" />
    </a>
  );
};
export {Map};
