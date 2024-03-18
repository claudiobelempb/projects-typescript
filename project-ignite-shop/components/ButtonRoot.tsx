import { ComponentProps } from 'react';

type ButtonTexProps = ComponentProps<'span'>;

export const ButtonText: React.FC<ButtonTexProps> = props => {
  return <span {...props}>{props.children}</span>;
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
      className={`p-4 px-8 shadow-lg duration-200 hover:opacity-80 w-full md:max-w-60 ${props.className}`}
    >
      {props.children}
    </button>
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
