import React, { ButtonHTMLAttributes } from 'react';

import { AppType } from 'types/AppType';
import * as Styles from './Button.module';

interface ButtonDefaultProps
  extends AppType,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  children,
  isIconLeft = true,
  isIconRight,
  title = 'Button Default',
  ...props
}: ButtonDefaultProps) => {
  switch (props.btntype) {
    case 'inverted':
      return (
        <Styles.Container>
          <Styles.Content {...props}>
            {isIconLeft && children} {title}
            {isIconRight && children}
          </Styles.Content>
        </Styles.Container>
      );
    case 'google':
      return (
        <Styles.Container>
          <Styles.Content {...props}>
            {isIconLeft && children} {title}
            {isIconRight && children}
          </Styles.Content>
        </Styles.Container>
      );

    default:
      return (
        <Styles.Container>
          <Styles.Content {...props}>
            {isIconLeft && children} {title}
            {isIconRight && children}
          </Styles.Content>
        </Styles.Container>
      );
  }
};
