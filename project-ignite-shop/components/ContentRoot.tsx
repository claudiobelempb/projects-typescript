import { ComponentProps } from 'react';

type ContentRootProps = ComponentProps<'section'>;

export const ContentRoot: React.FC<ContentRootProps> = ({ ...props }) => {
  return (
    <section
      {...props}
      className={`container max-w-6xl mx-auto  ${props.className}`}
    >
      {props.children}
    </section>
  );
};
