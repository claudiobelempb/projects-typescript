import Link, { LinkProps } from 'next/link';
import { ComponentProps, ReactNode } from 'react';

type LinkGroupProps = ComponentProps<'div'>;

export const LinkGroup: React.FC<LinkGroupProps> = props => {
  return (
    <div
      {...props}
      className={`flex flex-col items-center justify-center space-y-6 text-xl md:flex-row md:space-y-0 md:space-x-4 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

type LinkTexProps = ComponentProps<'span'>;

export const LinkText: React.FC<LinkTexProps> = props => {
  return <span {...props}>{props.children}</span>;
};

type LinkRootProps = LinkProps & {
  title?: string;
  link?: string;
  children: ReactNode;
  className: ReactNode;
};

export const LinkRoot: React.FC<LinkRootProps> = ({ ...props }) => {
  return (
    <Link
      {...props}
      className={`p-4 px-8 shadow-lg duration-200 hover:opacity-80 w-full md:max-w-60 ${props.className}`}
    >
      {props.children}
    </Link>
  );
};
