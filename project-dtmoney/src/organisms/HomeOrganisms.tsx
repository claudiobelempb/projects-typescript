import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { InputAtoms } from '@atoms/InputAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { CardMolecules } from '@molecules/CardMolecules';
import { HeaderMolecules } from '@molecules/HeaderMolecules';

export function HomeOrganisms() {
  return (
    <>
      <HeaderMolecules />
      <ContainerAtoms
        $flex={{ $justifyContent: 'center' }}
        $position={{
          $position: 'absolute',
          $top: 15,
          $left: 0,
          $right: 0
        }}
      >
        <ContentAtoms $flex={{ $columnGap: 1.6 }}>
          <CardMolecules
            $title='Entradas'
            $value='R$ 17.400,00'
            $icons={{ $type: 'ArrowCircleUp', $size: 32, $color: 'green700' }}
            $background={{ $background: 'shape100' }}
          />
          <CardMolecules
            $title='Saídas'
            $value='R$ 1.259,00'
            $icons={{ $type: 'ArrowCircleDown', $size: 32, $color: 'red700' }}
            $background={{ $background: 'shape100' }}
          />
          <CardMolecules
            $title='Total'
            $value='R$ 16.141,00'
            $icons={{ $type: 'CurrencyDollar', $size: 32, $color: 'white' }}
            $background={{ $background: 'green700' }}
          />
        </ContentAtoms>
      </ContainerAtoms>
      <ContainerAtoms
        as={'main'}
        $background={{ $background: 'shape700' }}
        $flex={{ $alingItems: 'center' }}
        $spacings={{ $pt: 'x64' }}
      >
        <ContentAtoms
          $height={{ $maxHeight: 5.6 }}
          $spacings={{ $mt: 'x48' }}
          $flex={{ $columnGap: 1 }}
        >
          <InputAtoms
            placeholder='Busque uma transação'
            $background={{ $background: 'background' }}
          />
          <ButtonAtoms
            $background={{ $background: 'transparent', $hover: 'transparent' }}
            $width={{ $maxWidth: 14.7 }}
            $border={{
              $border: {
                $borderWidth: 1,
                $borderStyle: 'solid ',
                $borderColor: 'green700'
              }
            }}
          >
            <IconAtom
              $icons={{ $type: 'MagnifyingGlass', $color: 'green700' }}
            />
            <TextAtoms
              $colors={{ $colors: 'green500', $hover: 'white' }}
              $fonts={{ $color: 'green700', $size: 'm16' }}
            >
              Buscar
            </TextAtoms>
          </ButtonAtoms>
        </ContentAtoms>
        <ContainerAtoms></ContainerAtoms>
      </ContainerAtoms>
    </>
  );
}
