import { ComponentProps, ReactNode } from 'react';

export type HeadingMediumProps = ComponentProps<'h2'>;

export const HeadingMedium: React.FC<HeadingMediumProps> = props => {
  return (
    <h2
      className={`text-4xl text-center uppercase md:text-left md:text-5xl ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

export type HeadingSmallProps = ComponentProps<'h5'>;

export const HeadingSmall: React.FC<HeadingMediumProps> = props => {
  return (
    <h5
      className={`text-2xl text-center uppercase md:text-left md:text-3xl ${props.className}`}
    >
      {props.children}
    </h5>
  );
};

export type HeaderPorps = {
  children: ReactNode;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
};

export const HeadingRoot: React.FC<HeaderPorps> = ({
  children,
  type,
  ...props
}) => {
  switch (type) {
    case 'h1':
      return (
        <h1
          {...props}
          className={`text-4xl font-bold text-darkGrayishBlue md:text-5xl mb-8 ${props.className}`}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          {...props}
          className={`text-2xl font-bold text-darkGrayishBlue md:text-3xl mb-8 ${props.className}`}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          {...props}
          className={`text-4xl font-bold text-darkGrayishBlue md:text-5xl mb-8 ${props.className}`}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          {...props}
          className={`text-lg font-bold text-darkGrayishBlue md:text-xl mb-8 ${props.className}`}
        >
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5
          {...props}
          className={`text-sm font-bold text-darkGrayishBlue md:text-lg mb-8 ${props.className}`}
        >
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6
          {...props}
          className={`text-xs font-bold text-darkGrayishBlue md:text-sm mb-8 ${props.className}`}
        >
          {children}
        </h6>
      );
  }
};
