import { typeDefault } from '@typesDefault/typesDefault';
import { TextAtomsContainer } from './styles';

export function TextAtoms({ ...props }: typeDefault) {
  return (
    <TextAtomsContainer as={props.as} {...props}>
      {props.children}
    </TextAtomsContainer>
  );
}
