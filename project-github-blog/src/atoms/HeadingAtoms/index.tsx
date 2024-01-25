import { typeDefault } from '@typesDefault/typesDefault';
import { HeadinAtomsContainer } from './styles';

export function HeadingAtoms({ as, ...props }: typeDefault) {
  switch (as) {
    case 'h2':
      return (
        <HeadinAtomsContainer as='h2' {...props}>
          {props.children}
        </HeadinAtomsContainer>
      );
    case 'h3':
      return (
        <HeadinAtomsContainer as='h3' {...props}>
          {props.children}
        </HeadinAtomsContainer>
      );
    case 'h4':
      return (
        <HeadinAtomsContainer as='h4' {...props}>
          {props.children}
        </HeadinAtomsContainer>
      );
    case 'h5':
      return (
        <HeadinAtomsContainer as='h5' {...props}>
          {props.children}
        </HeadinAtomsContainer>
      );
    case 'h6':
      return (
        <HeadinAtomsContainer as='h6' {...props}>
          {props.children}
        </HeadinAtomsContainer>
      );

    default:
      return (
        <HeadinAtomsContainer
          $fonts={{ $weigh: '400', $dinamic: 6.1 }}
          as='h1'
          {...props}
        >
          {props.children}
        </HeadinAtomsContainer>
      );
  }
}
