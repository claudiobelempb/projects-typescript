import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HBoxAtoms } from '@atoms/HBoxAtoms';
import { InputAtoms } from '@atoms/InputAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { VBoxAtoms } from '@atoms/VBoxAtoms';

export function BoxSearch() {
  return (
    <ContainerAtoms $spacings={{ $mb: 4.8 }}>
      <ContentAtoms>
        <VBoxAtoms>
          <HBoxAtoms $spacings={{ $mb: 1.2 }}>
            <TextAtoms>Publicações</TextAtoms>
            <TextAtoms>6 publicações</TextAtoms>
          </HBoxAtoms>
          <HBoxAtoms>
            <InputAtoms
              $background='input'
              type='search'
              placeholder='Buscar conteúdo'
            />
          </HBoxAtoms>
        </VBoxAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
