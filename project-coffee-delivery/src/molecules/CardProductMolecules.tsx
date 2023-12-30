import ProductCard from '@assets/product.png';
import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { TextAtoms } from '@atoms/TextAtoms';

export function CardProductMolecules() {
  return (
    <BoxAtoms
      $width={{ $maxWidth: 23, $minWidth: 23 }}
      $height={{ $minHeight: 31 }}
      $flex={{ $justifyContent: 'center', $alingItems: 'center' }}
      $background={{ $background: 'card' }}
      $border={{
        $radiusBottomLeft: { $width: 30 },
        $radiusTopRight: { $width: 30 }
      }}
      $space={{ $py: 's10', $mb: 'l32' }}
    >
      <ImageAtoms width={120} src={ProductCard} $space={{ $mt: -10 }} />
      <BoxAtoms $flex={{ $flexDirection: 'row', $columnGap: 1 }}>
        <TextAtoms
          $background={{ $background: 'yellow100' }}
          $color={{ $text: 'yellow700' }}
          $font={{ $fsize: 's10', $fcolor: 'yellow700', $fweigh: '700' }}
          $border={{ $radius: { $borderWidth: 50 } }}
          $space={{ $p: 's5' }}
          $text={{ $textTransform: 'uppercase' }}
        >
          Tradicional
        </TextAtoms>
        <TextAtoms
          $background={{ $background: 'yellow100' }}
          $color={{ $text: 'yellow700' }}
          $font={{ $fsize: 's10', $fcolor: 'yellow700', $fweigh: '700' }}
          $border={{ $radius: { $borderWidth: 50 } }}
          $space={{ $p: 's5' }}
          $text={{ $textTransform: 'uppercase' }}
        >
          com leite
        </TextAtoms>
      </BoxAtoms>
      <HeadingAtoms
        $font={{ $fsize: 'm20', $ffamily: 'Baloo' }}
        $space={{ $mb: 's8' }}
      >
        Expresso Tradicional
      </HeadingAtoms>
      <TextAtoms
        $font={{ $fsize: 's14' }}
        $text={{ $textAlign: 'center' }}
        $space={{ $mb: 'm16' }}
      >
        O tradicional café feito com água quente e grãos moídos
      </TextAtoms>
      <BoxAtoms
        $flex={{ $flexDirection: 'row', $columnGap: 0.5 }}
        $position={{ position: 'absolute', bottom: 16 }}
      >
        <BoxAtoms
          $flex={{
            $flexDirection: 'row',
            $alingItems: 'center',
            $columnGap: 0.5
          }}
        >
          <TextAtoms $font={{ $fsize: 's14' }} as='span'>
            R$
          </TextAtoms>
          <TextAtoms $font={{ $fsize: 'm24', $fweigh: '700' }} as='span'>
            9,90
          </TextAtoms>
        </BoxAtoms>

        <BoxAtoms
          $flex={{
            $flexDirection: 'row',
            $alingItems: 'center',
            $columnGap: 0.5
          }}
          $background={{ $background: 'button' }}
          $border={{ $radius: { $borderWidth: 5 } }}
        >
          <ButtonAtoms
            $width={{ $minWidth: 3 }}
            $height={{ $minHeight: 3 }}
            // $space={{ $p: 's5' }}
            $flex={{ $justifyContent: 'center' }}
            $background={{ $background: 'transparent' }}
            $color={{ $text: 'purple700', $hover: 'purple700' }}
          >
            <IconAtom size={14} type='FaMinus' $font={{ $fsize: 's14' }} />
          </ButtonAtoms>
          <TextAtoms>1</TextAtoms>
          <ButtonAtoms
            $width={{ $minWidth: 3 }}
            $height={{ $minHeight: 3 }}
            // $space={{ $p: 's5' }}
            $flex={{ $justifyContent: 'center' }}
            $background={{ $background: 'transparent' }}
            $color={{ $text: 'purple700', $hover: 'purple700' }}
          >
            <IconAtom size={14} type='FaPlus' />
          </ButtonAtoms>
        </BoxAtoms>
        <ButtonAtoms
          $width={{ $minWidth: 3 }}
          $height={{ $minHeight: 3 }}
          $background={{ $background: 'purple700' }}
          $color={{ $text: 'white', $hover: 'purple700' }}
          // $space={{ $p: 's5' }}
          $flex={{ $justifyContent: 'center' }}
        >
          <IconAtom type='FaShoppingCart' />
        </ButtonAtoms>
      </BoxAtoms>
    </BoxAtoms>
  );
}
