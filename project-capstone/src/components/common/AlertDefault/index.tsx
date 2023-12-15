import React from 'react';

import { AppType } from 'types/AppType';
import * as Styles from './AlertDefault.module';

const AlertDefault: React.FC<AppType> = ({ ...props }) => {
  return (
    <Styles.BoxDefaultStyle {...props}>{props.children}</Styles.BoxDefaultStyle>
  );
};

export { AlertDefault };
