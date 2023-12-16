import { typeDefault } from '@typesDefault/typesDefault';
import { HTMLProps, forwardRef } from 'react';
import { ButtonAtomsContainer } from './styles';

type ButtonProps = HTMLProps<HTMLButtonElement> & typeDefault;

export const ButtonAtoms = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return (
      <>
        <ButtonAtomsContainer {...props} ref={ref}>
          {props.children}
        </ButtonAtomsContainer>
      </>
    );
  }
);
