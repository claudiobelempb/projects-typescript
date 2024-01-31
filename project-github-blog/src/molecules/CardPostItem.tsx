import { HBoxAtoms } from '@atoms/HBoxAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { NavLinkAtoms } from '@atoms/NavLinkAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { VBoxAtoms } from '@atoms/VBoxAtoms';
import { relativeDateFormatter } from '@utils/formatter';

type Props = {
  item: ITEM_DTO;
};

export function CardPostItem({ ...item }: Props) {
  const params = item.item.url.slice(29).split('/');
  const formattedDate = relativeDateFormatter(item.item.created_at);

  return (
    <NavLinkAtoms
      // target='_blank'
      to={`/posts/${params[0]}/${params[1]}/${params[3]}`}
      $height={{ $maxHeight: 100, $minHeight: 26 }}
      $width={{
        $minWidth: 100,
        $maxWidth: 30
      }}
    >
      <VBoxAtoms
        $spacings={{ $p: 3, $mb: 1.6 }}
        $background='card900'
        $height={{ $maxHeight: 100, $minHeight: 26 }}
        $width={{
          $minWidth: 100,
          $maxWidth: 30
        }}
      >
        <HBoxAtoms $flex={{ $alingItems: 'flex-start' }} $spacings={{ $mb: 2 }}>
          <HeadingAtoms
            as='h3'
            $fonts={{ $size: 2 }}
            $color='title'
            $text={{ $ellipsis: true, $lines: 1 }}
          >
            {item.item?.title}
          </HeadingAtoms>
          <TextAtoms
            $width={{ $width: 20 }}
            $text={{ $textAlign: 'right' }}
            $fonts={{ $size: 1.4 }}
            $color='text'
          >
            {formattedDate}
          </TextAtoms>
        </HBoxAtoms>
        <TextAtoms
          $color='text'
          $text={{ $textAlign: 'left', $ellipsis: true, $lines: 5 }}
        >
          {item.item?.body}
        </TextAtoms>
      </VBoxAtoms>
    </NavLinkAtoms>
  );
}
