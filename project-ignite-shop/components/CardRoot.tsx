import { ComponentProps, ReactNode } from 'react';

type CardTitleProps = ComponentProps<'h5'>;

export const CardHeading: React.FC<CardTitleProps> = props => {
  return (
    <h5
      className={` text-2xl font-bold text-darkGrayishBlue ${props.className}`}
      {...props}
    >
      {props.children}
    </h5>
  );
};

type CardTexProps = ComponentProps<'p'>;

export const CardText: React.FC<CardTexProps> = props => {
  return (
    <p
      {...props}
      className={`${props.className} max-w-md text-xl text-grayishBlue`}
    >
      {props.children}
    </p>
  );
};

type CardGruopProps = ComponentProps<'div'>;

export const CardGruop: React.FC<CardGruopProps> = ({
  children,
  className
}) => {
  return <div className={`group relative ${className}`}>{children}</div>;
};

type CardRootProps = {
  children: ReactNode;
  className?: string;
};

export const CardRoot: React.FC<CardRootProps> = ({ children, className }) => {
  return (
    <article className={`flex flex-col space-y-5  ${className}`}>
      {children}
    </article>
  );
};
