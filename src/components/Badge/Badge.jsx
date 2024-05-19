import { Avatar } from 'flowbite-react';
import imgProfile from '../../assets/svg/Profile.svg';

const Badge = () => {
  return (
    <Avatar className="bg-white p-4 rounded-xl" img={imgProfile} rounded>
      <div className="font-medium dark:text-white ">
        <div>Dra Maria Baeza</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Otorrina</div>
      </div>
    </Avatar>
  );
}

export { Badge };
