import { ListItem } from "../../ListItem/ListItem";

const HorizontalCardVariant = ({title,description,image,content}) => {
  return (
    <div className="flex flex-col gap-8 lg:gap-0 justify-around z-10 relative w-full max-w-5xl mx-auto bg-[#E6F6FE] p-8 rounded-lg lg:flex-row">
      <div className="flex flex-col gap-4 lg:w-1/2 order-2 lg:order-1">
        <h3 className="text-4xl text-balance">{title}</h3>
        <p className="text-pretty">{description}</p>
        <ul className="flex flex-col gap-2">
          {content.map((item, index) => (
            <ListItem key={index}>
              {item}
            </ListItem>
          ))}
        </ul>
      </div>
      <figure className="aspect-square h-[326px] order-1 lg:order-2">
        <img className="rounded-lg w-full h-full object-cover object-center" src={image} alt={title} />
      </figure>
    </div>
  );
};

export { HorizontalCardVariant };