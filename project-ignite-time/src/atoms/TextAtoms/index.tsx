import { typeDefault } from '@typesDefault/typesDefault';
import { TextAtomsContainer } from './styles';

export function TextAtoms({ as, ...props }: typeDefault) {
  switch (as) {
    case 'strong':
      return (
        <TextAtomsContainer $font={{ $fdinamic: 1.82 }} as='strong' {...props}>
          {props.children}
        </TextAtomsContainer>
      );
    case 'span':
      return (
        <TextAtomsContainer $font={{ $fdinamic: 1.82 }} as='span' {...props}>
          {props.children}
        </TextAtomsContainer>
      );

    default:
      return (
        <TextAtomsContainer $font={{ $fdinamic: 1.82 }} as='p' {...props}>
          {props.children}
        </TextAtomsContainer>
      );
  }
}
