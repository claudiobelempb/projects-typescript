import { ComponentProps } from 'react';

type LoadingRootProps = ComponentProps<'div'>;

export const LoadingRoot: React.FC<LoadingRootProps> = props => {
  return (
    <div
      {...props}
      className={`${props.className} w-10 h-10 border-4 border-blue-200 border-r-blue-600 border-t-blue-600 rounded-full animate-spin transition duration-600`}
    ></div>
  );
};
