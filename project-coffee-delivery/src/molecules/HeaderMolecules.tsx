import BrandImg from '@assets/brand.svg';
import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { NavLinkAtoms } from '@atoms/NavLinkAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { useCart } from '@hooks/useCard';

export function HeaderMolecules() {
  const { cart } = useCart();
  return (
    <ContainerAtoms $space={{ $py: 'm24' }}>
      <ContentAtoms
        $display='flex'
        $flex={{ $flexDirection: 'row', $alingItems: 'center' }}
        $height={{ $height: 10 }}
      >
        <BoxAtoms $width={{ $maxWidth: 10 }}>
          <NavLinkAtoms to='/'>
            <ImageAtoms src={BrandImg} width={85} height={40} />
          </NavLinkAtoms>
        </BoxAtoms>
        <BoxAtoms
          $flex={{
            $flexDirection: 'row',
            $justifyContent: 'flex-end',
            $alingItems: 'center',
            $columnGap: 1
          }}
        >
          <ButtonAtoms
            $space={{ $py: 's8' }}
            $background={{ $background: 'purple100', $hover: 'purple500' }}
            $color={{ $text: 'purple700', $hover: 'white' }}
            btntitle='Porto Alegre, RS'
            $width={{ $maxWidth: 14.3 }}
            $height={{ $minHeight: 3.8 }}
          >
            <IconAtom type='FaMapMarkerAlt' />
          </ButtonAtoms>
          <NavLinkAtoms
            to={`checkout`}
            aria-disabled={cart?.length === 0}
            $background={{ $background: 'yellow100', $hover: 'yellow500' }}
            $color={{ $text: 'yellow700', $hover: 'white' }}
            $width={{ $maxWidth: 3.8 }}
            $height={{ $minHeight: 3.8 }}
          >
            <IconAtom type='FaShoppingCart' />
            <BoxAtoms
              $position={{ position: 'absolute', top: -8, right: -8 }}
              $border={{ $radius: { $borderWidth: 100 } }}
              $background={{ $background: 'yellow700' }}
              $width={{ $maxWidth: 2 }}
              $height={{ $minHeight: 2 }}
              $flex={{
                $flex: 1,
                $alingItems: 'center',
                $justifyContent: 'center'
              }}
              // $space={{ $px: 's5' }}
            >
              <TextAtoms
                $font={{ $fsize: 's12', $fweigh: '700' }}
                $color={{ $text: 'white' }}
                $text={{ $textAlign: 'center' }}
                $width={{ $minWidth: 3 }}
              >
                {cart?.length > 0 ? <span>{cart.length}</span> : null}
              </TextAtoms>
            </BoxAtoms>
          </NavLinkAtoms>
        </BoxAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
