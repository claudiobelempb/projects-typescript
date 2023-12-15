import { typeDefault } from '@typesDefault/typesDefault';
import { InputHTMLAttributes } from 'react';
import { InputAtomsContainer } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> & typeDefault;
export function InputAtoms({ ...props }: Props) {
  return <InputAtomsContainer {...props} />;
}
