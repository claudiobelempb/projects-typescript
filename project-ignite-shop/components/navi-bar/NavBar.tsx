'use client';
import Link from 'next/link';
import { ComponentProps, ReactNode, useState } from 'react';

import { NavBarMobile } from './NavBarMobile';

type NavBarPropsItem = {
  title?: string;
  href: string;
  children?: ReactNode;
  isBorderBottom?: boolean;
} & ComponentProps<'div'>;

export const NavBarItem: React.FC<NavBarPropsItem> = ({
  children,
  ...props
}) => {
  return (
    <div {...props} className={`${props.className} group`}>
      <Link href={props.href}>
        {children}
        {props.title}
      </Link>

      {props.isBorderBottom && (
        <div className='mx-2 group-hover:border-b group-hover:border-blue-50' />
      )}
    </div>
  );
};

type NavBarContentProps = {
  children: ReactNode;
} & ComponentProps<'div'>;

export const NavBarContent: React.FC<NavBarContentProps> = ({
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`h-10 items-center  md:space-x-8 ${props.className}`}
    >
      {children}
    </div>
  );
};

type NavBarRootProps = {
  children: ReactNode;
} & ComponentProps<'nav'>;

export const NavBarRoot: React.FC<NavBarRootProps> = ({
  children,
  ...props
}) => {
  return (
    <nav
      {...props}
      className={`${props.className} flex items-center justify-between font-bold text-white`}
    >
      {children}
    </nav>
  );
};

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
