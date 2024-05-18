import { BulletIcon } from '../../assets/svg/BulletIcon';

const ListItem = ({children}) => {
  return (
    <li className='flex gap-1'>
      <BulletIcon/>
      {children}
    </li>
  );
};

export { ListItem };
