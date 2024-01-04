import BrandImg from '@assets/brand.svg';
import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { NavLinkAtoms } from '@atoms/NavLinkAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
export function HeaderMolecules() {
  return (
    <ContainerAtoms $flex={{ $justifyContent: 'center' }}>
      <ContentAtoms
        $spacings={{ $pt: 'l32' }}
        $flex={{ $flexDirection: 'row', $alingItems: 'flex-start' }}
        $height={{ $minHeight: 21 }}
      >
        <BoxAtoms $width={{ $width: 50 }} $flex={{ $alingItems: 'flex-start' }}>
          <NavLinkAtoms to={'/'} $spacings={{ $p: 's5' }}>
            <ImageAtoms
              $width={{ $maxWidth: 17 }}
              $height={{ $minHeight: 4 }}
              src={BrandImg}
            />
          </NavLinkAtoms>
        </BoxAtoms>

        <BoxAtoms
          $display='flex'
          $flex={{ $justifyContent: 'flex-end' }}
          $width={{ $width: 50 }}
        >
          <ButtonAtoms
            $background={{ $background: 'green700', $hover: 'green500' }}
            $colors={{ $colors: 'white' }}
            $width={{ $maxWidth: 15.2 }}
            $height={{ $minHeight: 5 }}
          >
            <TextAtoms $fonts={{ $size: 'm16' }}>Nova transação</TextAtoms>
          </ButtonAtoms>
        </BoxAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
