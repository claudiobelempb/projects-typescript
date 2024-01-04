import { BoxAtoms } from '@atoms/BoxAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { typeDefault } from '@typesDefault/typesDefault';

type Props = typeDefault & {
  $title: string;
  $value: string;
};
export function CardMolecules({ ...props }: Props) {
  return (
    <BoxAtoms
      $spacings={{ $p: 'm24' }}
      $background={props.$background}
      $flex={{ $flexDirection: 'column', $alingItems: 'center' }}
    >
      <BoxAtoms
        $flex={{
          $flexDirection: 'row',
          $alingItems: 'center',
          $justifyContent: 'space-between'
        }}
      >
        <TextAtoms>{props.$title}</TextAtoms>
        <IconAtom $icons={props.$icons} />
      </BoxAtoms>
      <BoxAtoms>
        <TextAtoms $fonts={{ $size: 'l32', $fontWeigh: '700', $color: 'text' }}>
          {props.$value}
        </TextAtoms>
      </BoxAtoms>
    </BoxAtoms>
  );
}
