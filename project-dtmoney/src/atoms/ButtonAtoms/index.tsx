import { typeDefault } from '@typesDefault/typesDefault';
import { HTMLProps, forwardRef } from 'react';
import { Container } from './styles';

type ButtonProps = {
  btntitle?: string;
} & HTMLProps<HTMLButtonElement> &
  typeDefault;

export const ButtonAtoms = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return (
      <>
        <Container {...props} ref={ref}>
          {props.children}
          {props.btntitle && <span>{props.btntitle}</span>}
        </Container>
      </>
    );
  }
);
