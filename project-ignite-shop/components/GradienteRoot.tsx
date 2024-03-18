import { ComponentProps } from 'react';

export type GradientRootProps = ComponentProps<'div'>;

export const GradientRoot: React.FC<GradientRootProps> = props => {
  return (
    <div
      className={`absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 ${props.className}`}
    />
  );
};
