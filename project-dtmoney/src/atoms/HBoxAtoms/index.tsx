import { typeDefault } from '@typesDefault/typesDefault';
import { Container } from './styles';

export function HBoxAtoms({ ...props }: typeDefault) {
  return <Container {...props}>{props.children}</Container>;
}
