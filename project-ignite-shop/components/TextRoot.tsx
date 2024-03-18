import { ComponentProps, ReactNode } from 'react';

export type TextProps = {
  children: ReactNode;
  type?: 'p' | 'span';
  styled?: string;
};

export type ParagraphProps = ComponentProps<'p'>;

export const ParagraphRoot: React.FC<ParagraphProps> = props => {
  return (
    <p
      {...props}
      className={`${props.className} text-xl text-grayishBlue text-center leading-9 `}
    >
      {props.children}
    </p>
  );
};

export type SmallProps = ComponentProps<'small'>;

export const SmallRoot: React.FC<SmallProps> = props => {
  return (
    <span
      className={`text-sm text-grayishBlue text-center mt-4 ${props.className}`}
    >
      {props.children}
    </span>
  );
};

export const TextRoot: React.FC<TextProps> = ({ children, type, ...props }) => {
  switch (type) {
    case 'p':
      return (
        <p
          className={`${props.styled} text-2xl text-grayishBlue text-center my-10 `}
        >
          {children}
        </p>
      );
    case 'span':
      return (
        <span
          className={`text-sm text-grayishBlue text-center mt-4 ${props.styled}`}
        >
          {children}
        </span>
      );
  }
};
