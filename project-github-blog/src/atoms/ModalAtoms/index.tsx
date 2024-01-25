import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { NewTransactionModalMolecules } from '@molecules/NewTransactionModalMolecules';
import * as Dialog from '@radix-ui/react-dialog';
import { typeDefault } from '@typesDefault/typesDefault';
import { DialogContent, DialogOverlay } from './styles';

type Props = typeDefault & {
  $title?: string;
};
export function ModalAtoms({ ...props }: Props) {
  return (
    <Dialog.Portal>
      <DialogOverlay {...props} />
      <DialogContent {...props} $background={{ $background: 'gray700' }}>
        <NewTransactionModalMolecules />
        <Dialog.Close asChild>
          <ButtonAtoms
            $buttom={{
              $background: {
                $color: {
                  $color: 'transparent'
                }
              },
              $colors: {
                $color: {
                  $color: 'gray100'
                },
                $icon: { $color: 'gray100', $hover: 'gray100' }
              },
              $fonts: { $size: 1.6, $weigh: '700' },
              $width: { $maxWidth: 3 },
              $height: { $minHeight: 3 },
              $icons: { $type: 'X', $size: 16 },
              $position: { $position: 'fixed', $top: 0, $right: 0 },
              $spacings: { $m: 2.4 }
            }}
          />
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  );
}
