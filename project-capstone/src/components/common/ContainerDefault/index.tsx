import React from 'react';

import { AppType } from 'types/AppType';
import * as Styles from './Container.module';

const ContainerDefault: React.FC<AppType> = ({ ...props }) => {
  return (
    <Styles.ContainerDefault {...props}>
      {props.children}
    </Styles.ContainerDefault>
  );
};

export { ContainerDefault };
