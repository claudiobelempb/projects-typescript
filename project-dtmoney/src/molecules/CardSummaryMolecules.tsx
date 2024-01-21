import { HBoxAtoms } from '@atoms/HBoxAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { typeDefault } from '@typesDefault/typesDefault';
import { priceFormatter } from '@utils/formatter';
import { VBoxAtoms } from './../atoms/VBoxAtoms/index';

type Props = typeDefault & {
  $title: string;
  $value: number;
};
export function CardSummaryMolecules({ ...props }: Props) {
  return (
    <VBoxAtoms $spacings={{ $p: 2.4 }} $background={props.$background}>
      <HBoxAtoms>
        <TextAtoms $fonts={{ $color: 'gray300' }}>{props.$title}</TextAtoms>
        <IconAtom $icons={props.$icons} />
      </HBoxAtoms>
      <VBoxAtoms>
        <TextAtoms $fonts={{ $size: 3.2, $weigh: '700', $color: 'gray100' }}>
          {priceFormatter.format(props.$value)}
        </TextAtoms>
      </VBoxAtoms>
    </VBoxAtoms>
  );
}
