import React from 'react';

import { AppType } from 'types/AppType';
import * as Styles from './List.module';

const ListDefault: React.FC<AppType> = ({ ...props }) => {
  return (
    <Styles.ListDefaultContainer {...props}>
      {props.children}
    </Styles.ListDefaultContainer>
  );
};

const ItenListDefault: React.FC<AppType> = ({ ...props }) => {
  return (
    <Styles.ItenListDefaultContainer {...props}>
      {props.children}
    </Styles.ItenListDefaultContainer>
  );
};

export { ItenListDefault, ListDefault };
