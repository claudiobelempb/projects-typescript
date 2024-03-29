import React, { LabelHTMLAttributes, SelectHTMLAttributes } from 'react';

import { AppType } from 'types/AppType';
import * as Styles from './CheckBox.module';

interface IInputcheckboxDefaultType
  extends SelectHTMLAttributes<HTMLInputElement> {}
interface ILabelDefaultType extends LabelHTMLAttributes<HTMLLabelElement> {}

type InputcheckboxDefaultProps = IInputcheckboxDefaultType &
  AppType &
  ILabelDefaultType;

export const InputCheckBoxDefault = React.forwardRef(
  (
    { ...props }: InputcheckboxDefaultProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <>
        <Styles.InputCheckboxDefaultContainer
          {...props}
          type='checkbox'
          ref={ref}
        />
        {props.label && (
          <Styles.LabelDefaultContainer htmlFor={props.htmlFor}>
            {props.label}
          </Styles.LabelDefaultContainer>
        )}
      </>
    );
  }
);
