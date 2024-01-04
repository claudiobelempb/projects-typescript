import { typeDefault } from '@typesDefault/typesDefault';
import { HTMLProps, forwardRef } from 'react';
import { Container } from './styles';

type InputProps = HTMLProps<HTMLButtonElement> & typeDefault;

export const InputAtoms = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return <Container {...props} ref={ref} />;
  }
);
