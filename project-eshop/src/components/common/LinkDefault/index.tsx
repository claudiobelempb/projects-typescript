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
            title={props.title}
            to={props.href ? props.href : ''}
            target={props.target}
          >
            {props.title}
          </Styles.Content>
        </Styles.Container>
      );

    default:
      return (
        <Styles.Container {...props}>
          <Styles.Content {...props}>{props.title}</Styles.Content>
        </Styles.Container>
      );
  }
}

LinkDefault.defaultProps = {
  children: 'Link Default',
  href: '/',
  target: '_self'
};
