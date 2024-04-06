import { ComponentProps, ReactNode } from 'react';

export type HeadingLargeProps = ComponentProps<'h1'>;

export const HeadingLarge: React.FC<HeadingMediumProps> = props => {
  return (
    <h1
      className={`text-5xl text-center font-semibold uppercase lg:text-left text-black dark:text-white ${props.className}`}
    >
      {props.children}
    </h1>
  );
};

export type HeadingMediumProps = ComponentProps<'h2'>;

export const HeadingMedium: React.FC<HeadingMediumProps> = props => {
  return (
    <h2
      className={`text-4xl text-center font-semibold uppercase lg:text-left text-black dark:text-white ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

export type Heading1Props = ComponentProps<'h1'>;

export const Heading1: React.FC<Heading3Props> = props => {
  return (
    <h2
      className={`text-5xl text-center font-semibold uppercase lg:text-left text-black dark:text-white ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

export type Heading2Props = ComponentProps<'h2'>;

export const Heading2: React.FC<Heading3Props> = props => {
  return (
    <h2
      className={`text-3xl text-center font-semibold uppercase lg:text-left text-black dark:text-white ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

export type Heading3Props = ComponentProps<'h3'>;

export const Heading3: React.FC<Heading3Props> = props => {
  return (
    <h3
      className={`text-3xl text-center font-semibold uppercase lg:text-left text-black dark:text-white ${props.className}`}
    >
      {props.children}
    </h3>
  );
};

export type Heading4Props = ComponentProps<'h4'>;

export const Heading4: React.FC<Heading4Props> = props => {
  return (
    <h4
      className={`text-2xl text-center font-semibold uppercase lg:text-left text-black dark:text-white ${props.className}`}
    >
      {props.children}
    </h4>
  );
};

export type Heading5Props = ComponentProps<'h5'>;

export const Heading5: React.FC<Heading5Props> = props => {
  return (
    <h5
      className={`text-xl text-center font-semibold uppercase lg:text-left text-black dark:text-white ${props.className}`}
    >
      {props.children}
    </h5>
  );
};

export type Heading6Props = ComponentProps<'h6'>;

export const Heading6: React.FC<Heading6Props> = props => {
  return (
    <h6
      className={`text-lg text-center font-semibold uppercase lg:text-left text-black dark:text-white ${props.className}`}
    >
      {props.children}
    </h6>
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
