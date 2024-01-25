import { TYPE_BOX } from '@typesDefault/TypeBox';
import { ContainerTemplatesContainer } from './styles';

export function ContainerAtoms({ ...props }: TYPE_BOX) {
  return (
    <ContainerTemplatesContainer {...props}>
      {props.children}
    </ContainerTemplatesContainer>
  );
}
