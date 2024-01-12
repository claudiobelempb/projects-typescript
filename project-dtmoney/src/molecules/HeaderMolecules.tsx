import BrandImg from '@assets/brand.svg';
import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { ModalAtoms } from '@atoms/ModalAtoms';
import { NavLinkAtoms } from '@atoms/NavLinkAtoms';
import * as Dialog from '@radix-ui/react-dialog';

export function HeaderMolecules() {
  return (
    <ContainerAtoms
      $flex={{ $justifyContent: 'center' }}
      $spacings={{ $pdy: 3.2 }}
    >
      <ContentAtoms
        $flex={{ $direction: 'row', $alingItems: 'flex-start' }}
        $height={{ $minHeight: 21 }}
      >
        <BoxAtoms $width={{ $width: 50 }} $flex={{ $alingItems: 'flex-start' }}>
          <NavLinkAtoms to={'/'} $spacings={{ $p: 0.5 }}>
            <ImageAtoms
              $width={{ $maxWidth: 17 }}
              $height={{ $minHeight: 4 }}
              src={BrandImg}
            />
          </NavLinkAtoms>
        </BoxAtoms>

        <BoxAtoms
          $display='flex'
          $flex={{ $justifyContent: 'flex-end' }}
          $width={{ $width: 50 }}
        >
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ButtonAtoms
                $buttom={{
                  $background: {
                    $color: {
                      $color: 'green700',
                      $hover: 'green500'
                    }
                  },
                  $colors: {
                    $color: {
                      $color: 'gray100',
                      $hover: 'gray100'
                    }
                  },
                  $fonts: { $size: 1.6, $weigh: '700' },
                  $title: 'Nova transação',
                  $width: { $maxWidth: 15.2 },
                  $height: { $minHeight: 5 }
                }}
              />
            </Dialog.Trigger>

            <ModalAtoms $title='Nova transação' />
          </Dialog.Root>
        </BoxAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
