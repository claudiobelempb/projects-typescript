import { typeDefault } from '@typesDefault/typesDefault';
import { Container, Loading } from './styles';

type Props = typeDefault;
export function LoadingAtoms({ ...props }: Props) {
  switch (props.$variant) {
    case 'small':
      return (
        <Container {...props}>
          <Loading
            $width={{ $width: 16 }}
            $height={{ $height: 16 }}
            $border={{
              $border: { $borderWidth: 2, $borderStyle: 'solid ' },
              $borderTop: { $borderWidth: 2, $borderStyle: 'solid ' }
            }}
            {...props}
          />
        </Container>
      );
    case 'medium':
      return (
        <Container {...props}>
          <Loading
            $width={{ $width: 24 }}
            $height={{ $height: 24 }}
            $border={{
              $border: { $borderWidth: 3, $borderStyle: 'solid ' },
              $borderTop: { $borderWidth: 3, $borderStyle: 'solid ' }
            }}
            {...props}
          />
        </Container>
      );
    case 'large':
      return (
        <Container {...props}>
          <Loading
            $width={{ $width: 32 }}
            $height={{ $height: 32 }}
            $border={{
              $border: { $borderWidth: 5, $borderStyle: 'solid ' },
              $borderTop: { $borderWidth: 5, $borderStyle: 'solid ' }
            }}
            {...props}
          />
        </Container>
      );

    default:
      return (
        <Container {...props}>
          <Loading {...props} />
        </Container>
      );
  }
}
