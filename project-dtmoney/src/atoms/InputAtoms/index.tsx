import { typeDefault } from '@typesDefault/typesDefault';

import {
  FocusEvent,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState
} from 'react';

import { HBoxAtoms } from '@atoms/HBoxAtoms';
import { LabelAtoms } from '@atoms/LabelAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { FieldError } from 'react-hook-form';
import { Container } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> &
  typeDefault & {
    $optional?: {
      label?: string;
      $error?: FieldError;
    };
  };

export const InputAtoms = forwardRef(function TextInput(
  { $optional, onFocus, onBlur, ...props }: Props,
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

  switch (props.type) {
    case 'text':
      return (
        <>
          {$optional?.label && (
            <LabelAtoms data-state={isFocused ? 'focused' : 'blurred'}>
              {$optional?.label ? <span>{$optional?.label}</span> : null}
            </LabelAtoms>
          )}

          <Container
            type='text'
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref}
            {...props}
          />

          {$optional?.$error?.message ? (
            <TextAtoms>{$optional?.$error?.message}</TextAtoms>
          ) : null}
        </>
      );
    case 'number':
      return (
        <>
          {$optional?.label && (
            <LabelAtoms data-state={isFocused ? 'focused' : 'blurred'}>
              {$optional?.label ? <span>{$optional?.label}</span> : null}
            </LabelAtoms>
          )}

          <Container
            type='number'
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref}
            {...props}
          />

          {$optional?.$error?.message ? (
            <TextAtoms>{$optional?.$error?.message}</TextAtoms>
          ) : null}
        </>
      );
    case 'search':
      return (
        <>
          {$optional?.label && (
            <LabelAtoms data-state={isFocused ? 'focused' : 'blurred'}>
              {$optional?.label ? <span>{$optional?.label}</span> : null}
            </LabelAtoms>
          )}

          <Container
            type='number'
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref}
            {...props}
          />

          {$optional?.$error?.message ? (
            <TextAtoms>{$optional?.$error?.message}</TextAtoms>
          ) : null}
        </>
      );
    case 'radio':
      return (
        <HBoxAtoms {...props}>
          {$optional?.label && (
            <LabelAtoms data-state={isFocused ? 'focused' : 'blurred'}>
              {$optional?.label ? <span>{$optional?.label}</span> : null}
            </LabelAtoms>
          )}

          <Container
            type='radio'
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref}
            {...props}
          />

          {$optional?.$error?.message ? (
            <TextAtoms>{$optional?.$error?.message}</TextAtoms>
          ) : null}
        </HBoxAtoms>
      );
    default:
      break;
  }
});
