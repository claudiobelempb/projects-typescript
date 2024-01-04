import { typeDefault } from '@typesDefault/typesDefault';
import { NavAtomsContainer } from './styles';

export function NavAtoms({ ...props }: typeDefault) {
  return <NavAtomsContainer {...props}>{props.children}</NavAtomsContainer>;
}
