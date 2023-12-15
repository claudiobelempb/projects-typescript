import { AppType } from 'types/AppType';
import * as Styles from './Content.module';

export function ContentDefault({ ...props }: AppType) {
  return (
    <Styles.ContentDefaultStyle {...props}>
      {props.children && props.children}
    </Styles.ContentDefaultStyle>
  );
}
