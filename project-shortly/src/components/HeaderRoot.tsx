import Image from 'next/image';
import Link from 'next/link';
import ImgBrand from '../../public/images/logo.svg';
import { BoxRoot } from './BoxRoot';
import { ButtonRoot, ButtonText } from './ButtonRoot';
import { NavBarDesktop, NavBarLink } from './nav-bar/NavBarDesktop';
import { NavBarHamburger } from './nav-bar/NavBarHamburger';
export const HeaderRoot: React.FC = () => {
  return (
    <header className='relative container mx-auto p-6'>
      <BoxRoot className='flex items-center justify-between space-x-20'>
        <Link href='#' className='flex items-center'>
          <Image src={ImgBrand} alt='' className='' />
        </Link>
        <NavBarDesktop className='lg:flex gap-2'>
          <NavBarLink href='#'>Features</NavBarLink>
          <NavBarLink href='#'>Pricing</NavBarLink>
          <NavBarLink href='#'>Resources</NavBarLink>
        </NavBarDesktop>
        <NavBarHamburger />
        <BoxRoot className='hidden items-center space-x-6 lg:flex'>
          <NavBarLink href='#'>Login</NavBarLink>
          <ButtonRoot className='bg-cyan rounded-full'>
            <ButtonText className='text-white font-semibold'>
              Sign Up
            </ButtonText>
          </ButtonRoot>
        </BoxRoot>
      </BoxRoot>
    </header>
  );
};
