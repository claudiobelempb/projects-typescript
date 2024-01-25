import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { CardPostItem } from './CardPostItem';

export function CardPost() {
  return (
    <ContainerAtoms>
      <ContentAtoms
        $flex={{ $columnGap: 1.6 }}
        $grid={{ $grid: 'grid', $gridTemplateColumns: { $repeatColumns: 2 } }}
      >
        <CardPostItem />
        <CardPostItem />
        <CardPostItem />
        <CardPostItem />
      </ContentAtoms>
    </ContainerAtoms>
  );
}
