import { typeDefault } from '@typesDefault/typesDefault';

import {
  FocusEvent,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState
} from 'react';

import { LabelAtoms } from '@atoms/LabelAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { FieldError } from 'react-hook-form';
import { Container } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> &
  typeDefault & {
    optional?: boolean;
    error?: FieldError;
  };

export const InputAtoms = forwardRef(function TextInput(
  { optional, error, onFocus, onBlur, ...props }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false);
    onBlur?.(event);
  }

  return (
    <>
      <LabelAtoms data-state={isFocused ? 'focused' : 'blurred'}>
        <Container
          type='text'
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...props}
        />

        {optional ? <span>Opcional</span> : null}
      </LabelAtoms>

      {error?.message ? (
        <TextAtoms role='alert'>{error.message}</TextAtoms>
      ) : null}
    </>
  );
});
