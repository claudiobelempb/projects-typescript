import { HBoxAtoms } from '@atoms/HBoxAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { VBoxAtoms } from '@atoms/VBoxAtoms';

export function CardPostItem() {
  return (
    <VBoxAtoms
      $spacings={{ $p: 3, $mb: 1.6 }}
      $background='card900'
      $height={{ $maxHeight: 26 }}
    >
      <HBoxAtoms $flex={{ $alingItems: 'flex-start' }} $spacings={{ $mb: 2 }}>
        <HeadingAtoms
          as='h3'
          $fonts={{ $size: 2 }}
          $color='title'
          $text={{ $ellipsis: true, $lines: 2 }}
        >
          JavaScript data types and data structures
        </HeadingAtoms>
        <TextAtoms
          $width={{ $width: 20 }}
          $text={{ $textAlign: 'right' }}
          $fonts={{ $size: 1.4 }}
          $color='text'
        >
          Há 1 dia
        </TextAtoms>
      </HBoxAtoms>
      <TextAtoms $color='text' $text={{ $ellipsis: true }}>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </TextAtoms>
    </VBoxAtoms>
  );
}
