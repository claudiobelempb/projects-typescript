import { ComponentProps, ReactNode } from 'react';
import { NavBarLink } from './NavBarDesktop';

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
      <NavBarLink className='text-xl uppercase hover:text-pink-500' href='#'>
        Abount
      </NavBarLink>
      <NavBarLink className='text-xl uppercase hover:text-pink-500' href='#'>
        Carrers
      </NavBarLink>
      <NavBarLink className='text-xl uppercase hover:text-pink-500' href='#'>
        Events
      </NavBarLink>
      <NavBarLink className='text-xl uppercase hover:text-pink-500' href='#'>
        Products
      </NavBarLink>
      <NavBarLink className='text-xl uppercase hover:text-pink-500' href='#'>
        Support
      </NavBarLink>
    </nav>
  );
};
