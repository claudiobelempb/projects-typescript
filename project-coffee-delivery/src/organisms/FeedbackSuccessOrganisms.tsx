import FreteImage from '@assets/frete-free.svg';
import { BoxAtoms } from '@atoms/BoxAtoms';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { HeaderMolecules } from '@molecules/HeaderMolecules';
import { useTheme } from 'styled-components';

export function FeedbackSuccessOrganisms() {
  const { color } = useTheme();
  return (
    <ContainerAtoms>
      <HeaderMolecules />
      <ContentAtoms
        $flex={{ $flexDirection: 'row', $columnGap: 5 }}
        $space={{ $py: 'm24' }}
      >
        <BoxAtoms>
          <HeadingAtoms
            $font={{ $fsize: 'l32', $ffamily: 'Baloo', $fweigh: '700' }}
            $color={{ $title: 'yellow700' }}
          >
            Uhu! Pedido confirmado
          </HeadingAtoms>
          <TextAtoms $font={{ $fsize: 'm20' }} $color={{ $text: 'text' }}>
            Agora é só aguardar que logo o café chegará até você
          </TextAtoms>
          <BoxAtoms
            $space={{ $p: 'l32', $mt: 'l32' }}
            $border={{
              $border: {
                $borderWidth: 1,
                $borderStyle: 'solid ',
                $borderColor: 'yellow700'
              },
              $radiusTopRight: { $width: 5 },
              $radiusBottomLeft: { $width: 5 }
            }}
            $flex={{ $rowGap: 1 }}
          >
            <BoxAtoms
              $flex={{
                $flexDirection: 'row',
                $alingItems: 'center',
                $columnGap: 1
              }}
            >
              <IconAtom
                size={32}
                color={color.yellow700}
                type='FaMapMarkerAlt'
              />
              <BoxAtoms>
                <TextAtoms $font={{ $fsize: 'm16' }} $color={{ $text: 'text' }}>
                  Previsão de entrega
                </TextAtoms>
                <TextAtoms $font={{ $fsize: 'm16' }} $color={{ $text: 'text' }}>
                  20 min - 30 min
                </TextAtoms>
              </BoxAtoms>
            </BoxAtoms>
            <BoxAtoms
              $flex={{
                $flexDirection: 'row',
                $alingItems: 'center',
                $columnGap: 1
              }}
            >
              <IconAtom
                size={32}
                color={color.yellow700}
                type='FaMapMarkerAlt'
              />
              <BoxAtoms>
                <TextAtoms $font={{ $fsize: 'm16' }} $color={{ $text: 'text' }}>
                  Pagamento na entrega
                </TextAtoms>
                <TextAtoms $font={{ $fsize: 'm16' }} $color={{ $text: 'text' }}>
                  Cartão de Crédito
                </TextAtoms>
              </BoxAtoms>
            </BoxAtoms>
            <BoxAtoms
              $flex={{
                $flexDirection: 'row',
                $alingItems: 'center',
                $columnGap: 1
              }}
            >
              <IconAtom
                size={32}
                color={color.yellow700}
                type='FaMapMarkerAlt'
              />
              <BoxAtoms>
                <TextAtoms $font={{ $fsize: 'm16' }} $color={{ $text: 'text' }}>
                  Entrega em Rua João Daniel Martinelli, 102
                </TextAtoms>
                <TextAtoms $font={{ $fsize: 'm16' }} $color={{ $text: 'text' }}>
                  Farrapos - Porto Alegre, RS
                </TextAtoms>
              </BoxAtoms>
            </BoxAtoms>
          </BoxAtoms>
        </BoxAtoms>
        <BoxAtoms
          $flex={{
            $alingItems: 'center',
            $justifyContent: 'center'
          }}
        >
          <ImageAtoms src={FreteImage} />
        </BoxAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
