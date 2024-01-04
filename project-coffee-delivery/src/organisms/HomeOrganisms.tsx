import { BoxAtoms } from '@atoms/BoxAtoms';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { TextAtoms } from '@atoms/TextAtoms';

import CofferImg from '@assets/coffer.svg';
import { CardProductMolecules } from '@molecules/CardProductMolecules';

import { coffees } from '../../data.json';

export function HomeOrganisms() {
  return (
    <ContainerAtoms $space={{ $py: 'm24' }}>
      <ContentAtoms $flex={{ $flexDirection: 'row', $columnGap: 2 }}>
        <BoxAtoms $width={{ $width: 50 }}>
          <HeadingAtoms
            $color={{ $text: 'text' }}
            $font={{ $ffamily: 'Baloo', $fsize: 'x48', $fweigh: '900' }}
          >
            Encontre o café perfeito para qualquer hora do dia
          </HeadingAtoms>
          <TextAtoms $font={{ $fsize: 'm20' }}>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </TextAtoms>

          <BoxAtoms
            $flex={{ $flexDirection: 'row', $columnGap: 1.6 }}
            $space={{ $px: 'm16' }}
          >
            <BoxAtoms
              $flex={{
                $flexDirection: 'row',
                $alingItems: 'center',
                $columnGap: 1
              }}
            >
              <BoxAtoms
                $background={{ $background: 'yellow700' }}
                $height={{ $height: 4 }}
                $color={{ $text: 'white' }}
                $width={{ $maxWidth: 4 }}
                $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
                $border={{ $radius: { $borderWidth: 50 } }}
              >
                <IconAtom type='FaShoppingCart' />
              </BoxAtoms>
              <TextAtoms $font={{ $fsize: 's14' }}>
                Compra simples e segura
              </TextAtoms>
            </BoxAtoms>
            <BoxAtoms
              $flex={{
                $flexDirection: 'row',
                $alingItems: 'center',
                $columnGap: 1
              }}
            >
              <BoxAtoms
                $background={{ $background: 'title' }}
                $height={{ $height: 4 }}
                $color={{ $text: 'white' }}
                $width={{ $maxWidth: 4 }}
                $space={{ $p: 's5' }}
                $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
                $border={{ $radius: { $borderWidth: 50 } }}
              >
                <IconAtom type='FaBoxOpen' $color={{ $text: 'green500' }} />
              </BoxAtoms>
              <TextAtoms $font={{ $fsize: 's14' }}>
                Embalagem mantém o café intacto
              </TextAtoms>
            </BoxAtoms>
          </BoxAtoms>

          <BoxAtoms
            $flex={{ $flexDirection: 'row', $columnGap: 1.6 }}
            $space={{ $px: 'm16' }}
          >
            <BoxAtoms
              $flex={{
                $flexDirection: 'row',
                $alingItems: 'center',
                $columnGap: 1
              }}
            >
              <BoxAtoms
                $background={{ $background: 'yellow500' }}
                $height={{ $height: 4 }}
                $color={{ $text: 'white' }}
                $width={{ $maxWidth: 4 }}
                $space={{ $p: 's5' }}
                $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
                $border={{ $radius: { $borderWidth: 50 } }}
              >
                <IconAtom type='FaRegClock' />
              </BoxAtoms>
              <TextAtoms $font={{ $fsize: 's14' }}>
                Entrega rápida e rastreada
              </TextAtoms>
            </BoxAtoms>
            <BoxAtoms
              $flex={{
                $flexDirection: 'row',
                $alingItems: 'center',
                $columnGap: 1
              }}
            >
              <BoxAtoms
                $background={{ $background: 'purple500' }}
                $height={{ $height: 4 }}
                $color={{ $text: 'white' }}
                $width={{ $maxWidth: 4 }}
                $space={{ $p: 's5' }}
                $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
                $border={{ $radius: { $borderWidth: 50 } }}
              >
                <IconAtom type='FaCoffee' />
              </BoxAtoms>
              <TextAtoms $font={{ $fsize: 's14' }}>
                O café chega fresquinho até você
              </TextAtoms>
            </BoxAtoms>
          </BoxAtoms>
        </BoxAtoms>
        <BoxAtoms $width={{ $width: 50 }} $flex={{ $justifyContent: 'center' }}>
          <ImageAtoms src={CofferImg} />
        </BoxAtoms>
      </ContentAtoms>
      <ContentAtoms
        $space={{ $mt: 'x48' }}
        $flex={{
          $flexDirection: 'row',
          $rowGap: 3,
          $flexWrap: 'wrap',
          $justifyContent: 'center'
        }}
      >
        {coffees.map(coffee => (
          <CardProductMolecules key={coffee.id} coffee={coffee} />
        ))}
      </ContentAtoms>
    </ContainerAtoms>
  );
}
