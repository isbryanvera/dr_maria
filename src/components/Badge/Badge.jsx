import { Avatar } from 'flowbite-react';

const Badge = () => {
  return (
    <Avatar className="bg-white p-4 rounded-xl" img="./src/assets/svg/Profile.svg" rounded>
      <div className="font-medium dark:text-white ">
        <div>Dra Maria Baeza</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Otorrina</div>
      </div>
    </Avatar>
  );
}

export { Badge };
