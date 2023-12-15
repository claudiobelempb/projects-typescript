import { BoxAtoms } from '@atoms/BoxAtoms';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HeaderMolecules } from '@molecules/HeaderMolecules';
import { Outlet } from 'react-router-dom';

export function MainTemplates() {
  return (
    <ContainerAtoms $space={{ $pd: 'x64' }} $flex={{ $alingItems: 'center' }}>
      <ContentAtoms as='main'>
        <BoxAtoms
          $variant={{ $vbackgroud: 'gray_600' }}
          $space={{ $pd: 'x64' }}
          $border={{
            $radius: { borderWidth: 10 }
          }}
          $height={{ $height: 100 }}
        >
          <HeaderMolecules />
          <Outlet />
        </BoxAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
