import { BoxAtoms } from '@atoms/BoxAtoms';
import { TextAtoms } from '@atoms/TextAtoms';

type Props = {
  number: number;
};

export function TimerNumber({ number }: Props) {
  return (
    <BoxAtoms
      $space={{ $p: 's8' }}
      $variant={{ $vbackgroud: 'gray_500' }}
      $flex={{ $justifyContent: 'center', $alignSelf: 'center' }}
      display='flex'
      $border={{ $radius: { borderWidth: 8 } }}
    >
      <TextAtoms
        as='span'
        $font={{ $fdinamic: 16, $ffamily: 'RobotoMono' }}
        $text={{ $textAlign: 'center' }}
      >
        {number}
      </TextAtoms>
    </BoxAtoms>
  );
}
