import { BoxAtoms } from '@atoms/BoxAtoms';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';

import { Outlet } from 'react-router-dom';

export function MainTemplates() {
  return (
    <ContainerAtoms $space={{ $pd: 'x64' }} $flex={{ $alingItems: 'center' }}>
      <ContentAtoms as='main'>
        <BoxAtoms
          $background={{ $background: 'background' }}
          $space={{ $pd: 'x64' }}
          $border={{
            $radius: { $borderWidth: 10 }
          }}
          $height={{ $height: 100 }}
        >
          <h1>Header</h1>
          <Outlet />
        </BoxAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
