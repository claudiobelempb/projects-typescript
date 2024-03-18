import { ComponentProps } from 'react';

type BoxRootProps = ComponentProps<'div'>;

export const BoxRoot: React.FC<BoxRootProps> = ({ className, ...props }) => {
  return (
    <div {...props} className={`${className}`}>
      {props.children}
    </div>
  );
};
