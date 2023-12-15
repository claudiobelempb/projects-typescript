import React from 'react';

import { AppType } from 'types/AppType';
import * as Styles from './Text.module';

const TextDefault: React.FC<AppType> = ({ children, ...props }) => {
  switch (props.as) {
    case 'p':
      return (
        <Styles.ContainerParagraph {...props}>
          {children}
        </Styles.ContainerParagraph>
      );
    case 'strong':
      return (
        <Styles.ContainerStrong {...props}>{children}</Styles.ContainerStrong>
      );
    case 'h3':
      return <Styles.ContainerSpan {...props}>{children}</Styles.ContainerSpan>;

    default:
      return (
        <Styles.ContainerParagraph {...props}>
          {children}
        </Styles.ContainerParagraph>
      );
  }
};

export { TextDefault };
