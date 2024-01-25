import { typeDefault } from '@typesDefault/typesDefault';
import { StatusAtomsContainer } from './styles';

export function StatusAtoms({ ...props }: typeDefault) {
  return (
    <StatusAtomsContainer {...props}>{props.children}</StatusAtomsContainer>
  );
}
