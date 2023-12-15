import React from 'react';

import { AppType } from 'types/AppType';
import * as Styles from './Box.module';

const BoxDefault: React.FC<AppType> = ({ ...props }) => {
  return (
    <Styles.BoxDefaultStyle {...props}>{props.children}</Styles.BoxDefaultStyle>
  );
};

export { BoxDefault };
