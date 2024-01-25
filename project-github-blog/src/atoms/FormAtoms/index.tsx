import { typeDefault } from '@typesDefault/typesDefault';
import { FormHTMLAttributes } from 'react';
import { FormAtomsContainer } from './styles';

type Props = FormHTMLAttributes<HTMLFormElement> & typeDefault;
export function FormAtoms({ ...props }: Props) {
  return <FormAtomsContainer {...props}>{props.children}</FormAtomsContainer>;
}
