'use client';
import Link from 'next/link';
import { ComponentProps, ReactNode } from 'react';

type NavBarPropsLink = {
  title?: string;
  href: string;
  children?: ReactNode;
  isBorderBottom?: boolean;
} & ComponentProps<'div'>;

export const NavBarLink: React.FC<NavBarPropsLink> = ({
  children,
  ...props
}) => {
  return (
    <div {...props} className={`${props.className} group `}>
      <Link
        className='text-grayisViolet font-semibold group-hover:text-veryDarkBlue'
        href={props.href}
      >
        {children}
        {props.title}
      </Link>

      {props.isBorderBottom && (
        <div className='mx-2 group-hover:border-b group-hover:border-blue-50' />
      )}
    </div>
  );
};

type NavBarDesktopProps = {
  children: ReactNode;
} & ComponentProps<'nav'>;

export const NavBarDesktop: React.FC<NavBarDesktopProps> = ({
  children,
  ...props
}) => {
  return (
    <nav
      {...props}
      className={`${props.className} h-10 md:space-x-8 items-center justify-between  hidden `}
    >
      {children}
    </nav>
  );
};
