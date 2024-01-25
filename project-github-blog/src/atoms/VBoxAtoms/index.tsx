import { TYPE_BOX } from '@typesDefault/TypeBox';
import { Container } from './styles';

export function VBoxAtoms({ ...props }: TYPE_BOX) {
  return <Container {...props}>{props.children}</Container>;
}
