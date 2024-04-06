import { ComponentProps } from 'react';

type ContentRootProps = ComponentProps<'section'>;

export const ContentRoot: React.FC<ContentRootProps> = ({ ...props }) => {
  return (
    <section {...props} className={`container mx-auto  ${props.className}`}>
      {props.children}
    </section>
  );
};
