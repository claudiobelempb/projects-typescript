import { TYPE_BOX } from '@typesDefault/TypeBox';
import { BoxTemplatesContainer } from './styles';

export function BoxAtoms({ ...props }: TYPE_BOX) {
  return (
    <BoxTemplatesContainer {...props}>{props.children}</BoxTemplatesContainer>
  );
}
