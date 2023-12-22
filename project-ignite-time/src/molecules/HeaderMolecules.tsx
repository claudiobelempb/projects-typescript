import BrandImg from '@assets/band.svg';
import { BoxAtoms } from '@atoms/BoxAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { NavAtoms } from '@atoms/NavAtoms';
import { NavLinkAtoms } from '@atoms/NavLinkAtoms';

export function HeaderMolecules() {
  return (
    <BoxAtoms
      as='header'
      $flex={{
        $flexDirection: 'row',
        $alingItems: 'center',
        $justifyContent: 'space-between'
      }}
      $height={{ $minHeight: 4.8 }}
      $variant={{ $vbackgroud: 'gray_600' }}
    >
      <BoxAtoms $width={{ $width: 4 }}>
        <NavLinkAtoms to={'/'} title='Home'>
          <ImageAtoms src={BrandImg} width={40} height={40} />
        </NavLinkAtoms>
      </BoxAtoms>
      <NavAtoms
        $flex={{
          $flexDirection: 'row',
          $justifyContent: 'flex-end',
          $columnGap: 0.8
        }}
      >
        <NavLinkAtoms
          to={'/'}
          title='Home'
          $width={{ $width: 4 }}
          $height={{ $height: 4 }}
          $isHover
          $isActive
        >
          <IconAtom type='FaRegClock' />
        </NavLinkAtoms>
        <NavLinkAtoms
          to={'/history'}
          title='Histórico'
          $width={{ $width: 4 }}
          $height={{ $height: 4 }}
          $isHover
          $isActive
        >
          <IconAtom type='FaHistory' />
        </NavLinkAtoms>
      </NavAtoms>
    </BoxAtoms>
  );
}
