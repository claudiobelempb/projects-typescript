import { AppType } from 'types/AppType';
import * as Styles from './Content.module';

export const ContentDefault: React.FC<AppType> = ({ ...props }) => {
  return (
    <Styles.ContentDefaultStyle {...props}>
      {props.children && props.children}
    </Styles.ContentDefaultStyle>
  );
};
