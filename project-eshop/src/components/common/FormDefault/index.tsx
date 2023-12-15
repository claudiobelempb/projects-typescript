import { FormHTMLAttributes } from 'react';

import { AppType } from 'types/AppType';
import { FormContainerDefault } from './Form.module';

type FormDefaultTypes = FormHTMLAttributes<HTMLFormElement>;
type FormDefaultProps = AppType & FormDefaultTypes;

export function FormDefault({ ...props }: FormDefaultProps) {
  return (
    <FormContainerDefault {...props}>{props.children}</FormContainerDefault>
  );
}
