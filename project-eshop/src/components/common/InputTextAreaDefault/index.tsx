import React, { LabelHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { AppType } from 'types/AppType';
import * as Styles from './TextArea.module';

type ITextAreaDefaultType = TextareaHTMLAttributes<HTMLTextAreaElement>;
type ILabelDefaultType = LabelHTMLAttributes<HTMLLabelElement>;

type TextAreaDefaultTypeProps = ITextAreaDefaultType &
  AppType &
  ILabelDefaultType;

export const InputTextAreaDefault = React.forwardRef(
  (
    { ...props }: TextAreaDefaultTypeProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <Styles.Container>
        {props.label && (
          <Styles.LabelDefaultContainer htmlFor={props.htmlFor}>
            {props.label}
          </Styles.LabelDefaultContainer>
        )}
        <Styles.TextAreaDefaultContainer {...props} ref={ref}>
          {props.children}
        </Styles.TextAreaDefaultContainer>
      </Styles.Container>
    );
  }
);
