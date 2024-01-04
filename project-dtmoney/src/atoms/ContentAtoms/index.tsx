import { typeDefault } from '@typesDefault/typesDefault';
import { ContentTemplatesContainer } from './styles';

export function ContentAtoms({ ...props }: typeDefault) {
  return (
    <ContentTemplatesContainer {...props}>
      {props.children}
    </ContentTemplatesContainer>
  );
}
