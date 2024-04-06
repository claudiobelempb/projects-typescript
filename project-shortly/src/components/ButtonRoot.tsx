import Link from 'next/link';
import { ComponentProps } from 'react';

type ButtonTexProps = ComponentProps<'span'>;

export const ButtonText: React.FC<ButtonTexProps> = props => {
  return (
    <span
      {...props}
      className={`block text-black text-center font-semibold ${props.className}`}
    >
      {props.children}
    </span>
  );
};

type ButtonGroupProps = ComponentProps<'div'>;

export const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  return (
    <div
      {...props}
      className={`flex flex-col items-center justify-center space-y-6 text-xl md:flex-row md:space-y-0 md:space-x-4 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

type ButtonRootProps = ComponentProps<'button'>;

export const ButtonRoot: React.FC<ButtonRootProps> = ({ ...props }) => {
  return (
    <button
      {...props}
      className={`py-3 px-8 shadow-lg duration-200 hover:opacity-70 w-full rounded-full md:max-w-60  ${props.className}`}
    >
      {props.children}
    </button>
  );
};

type ButtonLinkProps = {} & ComponentProps<'a'>;

export const ButtonLink: React.FC<ButtonLinkProps> = ({ ...props }) => {
  return (
    <Link
      href={props.href ? props.href : '#'}
      {...props}
      className={`py-3 px-6 shadow-lg duration-200 hover:opacity-70  bg-cyan rounded-full lg:py-4 lg:px-8 ${props.className}`}
    >
      {props.children}
    </Link>
  );
};

type ButtonOutlineProps = ComponentProps<'button'>;

export const ButtonOutline: React.FC<ButtonOutlineProps> = ({ ...props }) => {
  return (
    <button
      {...props}
      className={`px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white  ${props.className}`}
    >
      {props.children}
    </button>
  );
};
