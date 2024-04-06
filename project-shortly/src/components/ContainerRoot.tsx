import { ComponentProps } from 'react';

type ContainerRootProps = ComponentProps<'div'>;

export const ContainerRoot: React.FC<ContainerRootProps> = props => {
  return (
    <div {...props} className={` ${props.className}`}>
      {props.children}
    </div>
  );
};
