import { TYPE_BOX } from '@typesDefault/TypeBox';
import { ContentTemplatesContainer } from './styles';

export function ContentAtoms({ ...props }: TYPE_BOX) {
  return (
    <ContentTemplatesContainer {...props}>
      {props.children}
    </ContentTemplatesContainer>
  );
}
