import BackgrounImage from '@assets/background-header.svg';
import BrandImg from '@assets/brand.svg';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HBoxAtoms } from '@atoms/HBoxAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
export function HeaderMolecules() {
  return (
    <ContainerAtoms
      $background_image={{
        url: BackgrounImage,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <ContentAtoms $flex={{ $justifyContent: 'center' }}>
        <HBoxAtoms $height={{ $minHeight: 29 }}>
          <ImageAtoms src={BrandImg} $spacings={{ $mt: -5 }} />
        </HBoxAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
