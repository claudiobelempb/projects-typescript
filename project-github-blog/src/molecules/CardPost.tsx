import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { CardPostItem } from './CardPostItem';

type Props = {
  items: ITEM_DTO[];
};

export function CardPost({ items }: Props) {
  return (
    <ContainerAtoms>
      <ContentAtoms
        $flex={{ $columnGap: 1.6 }}
        $grid={{ $grid: 'grid', $gridTemplateColumns: { $repeatColumns: 2 } }}
      >
        {items.map(item => (
          <CardPostItem key={item.id} item={item} />
        ))}
      </ContentAtoms>
    </ContainerAtoms>
  );
}
