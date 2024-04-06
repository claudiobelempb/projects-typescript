'use client';

import { ComponentProps, ReactNode, useState } from 'react';
import { NavBarMobile } from './NavBarMobile';

type NavBarHamburgerPropsItem = {
  title?: string;
  href?: string;
  children?: ReactNode;
} & ComponentProps<'div'>;

export const NavBarHamburger: React.FC<NavBarHamburgerPropsItem> = ({
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen(status: boolean) {
    setIsOpen(!status);
  }

  return (
    <div {...props} className={`md:hidden ${props.className}`}>
      <button
        onClick={() => handleOpen(isOpen)}
        className={`z-40 block ${
          isOpen ? 'open' : ''
        } hamburger md:hidden focus:outline-none`}
        type='button'
      >
        <span
          className='
          hamburger-top
        '
        />
        <span
          className='
          hamburger-center
        '
        />
        <span
          className='
          hamburger-bottom
        '
        />
      </button>
      <NavBarMobile show={isOpen} />
    </div>
  );
};
