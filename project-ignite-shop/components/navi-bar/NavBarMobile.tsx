import { ComponentProps, ReactNode } from 'react';
import { NavBarItem } from './NavBar';

type NavBarMobileProps = {
  title?: string;
  href?: string;
  children?: ReactNode;
  show: boolean;
} & ComponentProps<'nav'>;

export const NavBarMobile: React.FC<NavBarMobileProps> = ({ show }) => {
  return (
    <nav
      className={`absolute top-0 left-0 ${
        show ? 'flex' : 'hidden'
      } flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 bg-black`}
    >
      <NavBarItem className='text-xl uppercase hover:text-pink-500' href='#'>
        Abount
      </NavBarItem>
      <NavBarItem className='text-xl uppercase hover:text-pink-500' href='#'>
        Carrers
      </NavBarItem>
      <NavBarItem className='text-xl uppercase hover:text-pink-500' href='#'>
        Events
      </NavBarItem>
      <NavBarItem className='text-xl uppercase hover:text-pink-500' href='#'>
        Products
      </NavBarItem>
      <NavBarItem className='text-xl uppercase hover:text-pink-500' href='#'>
        Support
      </NavBarItem>
    </nav>
  );
};
