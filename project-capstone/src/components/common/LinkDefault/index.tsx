import { LinkHTMLAttributes } from 'react';

import { AppType } from 'types/AppType';
import * as Styles from './Link.module';

type LinkDefaultTypes = LinkHTMLAttributes<HTMLLinkElement>;
type LinkDefaultProps = AppType & LinkDefaultTypes;

export function LinkDefault({ ...props }: LinkDefaultProps) {
  switch (props.target) {
    case '_blank':
      return (
        <Styles.Container {...props}>
          <Styles.Content
            to={props.href ? props.href : ''}
            target={props.target}
          >
            {props.children}
          </Styles.Content>
        </Styles.Container>
      );

    default:
      return (
        <Styles.Container {...props}>
          <Styles.Content
            to={props.href ? props.href : ''}
            target={props.target}
            {...props}
          >
            {props.children}
          </Styles.Content>
        </Styles.Container>
      );
  }
}

LinkDefault.defaultProps = {
  title: 'Link Default',
  href: '/',
  target: '_self'
};
