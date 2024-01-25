import { typeDefault } from '@typesDefault/typesDefault';
import { LabelHTMLAttributes } from 'react';
import { LabelAtomsContainer } from './styles';
type Props = LabelHTMLAttributes<HTMLLabelElement> & typeDefault;
export function LabelAtoms({ ...props }: Props) {
  return (
    <LabelAtomsContainer $font={{ $fdinamic: 1.82 }} {...props}>
      {props.children}
    </LabelAtomsContainer>
  );
}
