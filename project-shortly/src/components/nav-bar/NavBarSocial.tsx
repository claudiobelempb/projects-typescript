import { Facebook, Github, Instagram, Twitter } from 'lucide-react';
import { ComponentProps, ReactNode } from 'react';
import { NavBarLink } from './NavBarDesktop';

type NavBarContentProps = {
  children: ReactNode;
} & ComponentProps<'div'>;

export const NavBarSocial: React.FC<NavBarContentProps> = ({
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`h-10 items-center md:space-x-8 ${props.className}`}
    >
      <NavBarLink href='#'>
        <Facebook />
      </NavBarLink>
      <NavBarLink href='#'>
        <Twitter />
      </NavBarLink>
      <NavBarLink href='#'>
        <Github />
      </NavBarLink>
      <NavBarLink href='#'>
        <Instagram />
      </NavBarLink>
    </div>
  );
};
