import { typeDefault } from '@typesDefault/typesDefault';
import { HeadinAtomsContainer } from './styles';

export function HeadingAtoms({ as, ...props }: typeDefault) {
  switch (as) {
    case 'h2':
      return (
        <HeadinAtomsContainer $font={{ $fdinamic: 3.1 }} as='h2' {...props}>
          {props.children}
        </HeadinAtomsContainer>
      );
    case 'h3':
      return (
        <HeadinAtomsContainer $font={{ $fdinamic: 2.1 }} as='h3' {...props}>
          {props.children}
        </HeadinAtomsContainer>
      );
    case 'h4':
      return (
        <HeadinAtomsContainer
          $font={{ $fweigh: '400', $fdinamic: 1.6 }}
          as='h4'
          {...props}
        >
          {props.children}
        </HeadinAtomsContainer>
      );
    case 'h5':
      return (
        <HeadinAtomsContainer
          $font={{ $fweigh: '400', $fdinamic: 1.322 }}
          as='h5'
          {...props}
        >
          {props.children}
        </HeadinAtomsContainer>
      );
    case 'h6':
      return (
        <HeadinAtomsContainer
          $font={{ $fweigh: '400', $fdinamic: 1.172 }}
          as='h6'
          {...props}
        >
          {props.children}
        </HeadinAtomsContainer>
      );

    default:
      return (
        <HeadinAtomsContainer
          $font={{ $fweigh: '400', $fdinamic: 6.1 }}
          as='h1'
          {...props}
        >
          {props.children}
        </HeadinAtomsContainer>
      );
  }
}
