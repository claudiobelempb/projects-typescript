import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HBoxAtoms } from '@atoms/HBoxAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { NavLinkAtoms } from '@atoms/NavLinkAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { VBoxAtoms } from '@atoms/VBoxAtoms';

export function CardHeaderPost() {
  return (
    <ContainerAtoms $spacings={{ $mb: 7.2 }}>
      <ContentAtoms $background='card500' $spacings={{ $mt: -10, $p: 2 }}>
        <HBoxAtoms $flex={{ $columnGap: 2, $alingItems: 'center' }}>
          <VBoxAtoms>
            <HBoxAtoms>
              <NavLinkAtoms
                to='/'
                $flex={{
                  $direction: 'row',
                  $alingItems: 'center',
                  $columnGap: 1
                }}
                $color='blue500'
                $hover='white'
                // $color_fill='blue500'
                // $color_fill_hover='white'
                $spacings={{ $p: 1 }}
              >
                <IconAtom $type='CaretLeft' />
                <TextAtoms
                  $fonts={{
                    $size: 1.2
                  }}
                  $text={{ $textTransform: 'uppercase' }}
                >
                  Voltar
                </TextAtoms>
              </NavLinkAtoms>
              <NavLinkAtoms
                to='/'
                $flex={{
                  $direction: 'row',
                  $alingItems: 'center',
                  $columnGap: 1
                }}
                $color='blue500'
                $hover='white'
                // $color_fill='blue500'
                // $color_fill_hover='white'
                $spacings={{ $p: 1 }}
              >
                <TextAtoms
                  $fonts={{
                    $size: 1.2
                  }}
                  $text={{ $textTransform: 'uppercase' }}
                >
                  ver no github
                </TextAtoms>
                <IconAtom $type='ArrowSquareOut' />
              </NavLinkAtoms>
            </HBoxAtoms>
            <VBoxAtoms $spacings={{ $mb: 2.4 }}>
              <HeadingAtoms as='h2'>
                JavaScript data types and data structures
              </HeadingAtoms>
            </VBoxAtoms>
            <HBoxAtoms $flex={{ $justifyContent: 'flex-start', $columnGap: 2 }}>
              <NavLinkAtoms
                to='/'
                $flex={{
                  $direction: 'row',
                  $alingItems: 'center',
                  $columnGap: 1
                }}
                $color='subtitle'
                $hover='white'
              >
                <IconAtom $type='GithubLogo' />
                <TextAtoms>claudiobelempb</TextAtoms>
              </NavLinkAtoms>
              <NavLinkAtoms
                to='/'
                $flex={{
                  $direction: 'row',
                  $alingItems: 'center',
                  $columnGap: 1
                }}
                $color='subtitle'
                $hover='white'
              >
                <IconAtom $type='Buildings' />
                <TextAtoms>surb</TextAtoms>
              </NavLinkAtoms>
              <NavLinkAtoms
                to='/'
                $flex={{
                  $direction: 'row',
                  $alingItems: 'center',
                  $columnGap: 1
                }}
                $color='subtitle'
                $hover='white'
              >
                <IconAtom $type='ChatCircle' />
                <TextAtoms>32 seguidores</TextAtoms>
              </NavLinkAtoms>
            </HBoxAtoms>
          </VBoxAtoms>
        </HBoxAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
