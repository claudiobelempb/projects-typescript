import { typeDefault } from '@typesDefault/typesDefault';
import { ButtonHTMLAttributes } from 'react';
import { ButtonAtomsContainer } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & typeDefault;
export function ButtonAtoms({ ...props }: Props) {
  return (
    <ButtonAtomsContainer {...props}>{props.children}</ButtonAtomsContainer>
  );
}
