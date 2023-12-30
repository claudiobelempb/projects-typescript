import { typeDefault } from '@typesDefault/typesDefault';
import { BoxTemplatesContainer } from './styles';

export function BoxAtoms({ ...props }: typeDefault) {
  return (
    <BoxTemplatesContainer {...props}>{props.children}</BoxTemplatesContainer>
  );
}
