import { typeDefault } from 'typesDefault/typesDefault';
import { ContainerTemplatesContainer } from './styles';

export function ContainerAtoms({ ...props }: typeDefault) {
  return (
    <ContainerTemplatesContainer {...props}>
      {props.children}
    </ContainerTemplatesContainer>
  );
}
