import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HBoxAtoms } from '@atoms/HBoxAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { NavLinkAtoms } from '@atoms/NavLinkAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { VBoxAtoms } from '@atoms/VBoxAtoms';

export function CardProfile() {
  return (
    <ContainerAtoms $spacings={{ $mb: 7.2 }}>
      <ContentAtoms $background='card500' $spacings={{ $mt: -10, $p: 2 }}>
        <HBoxAtoms $flex={{ $columnGap: 2, $alingItems: 'center' }}>
          <HBoxAtoms
            $width={{ $maxWidth: 14.8 }}
            $height={{ $minHeight: 14.8 }}
            $background='transparent'
          >
            <ImageAtoms
              $width={{ $maxWidth: 14.8 }}
              $height={{ $minHeight: 14.8 }}
              // $spacings={{ $pb: 6 }}
              src='https://avatars.githubusercontent.com/u/9382100?v=4'
            />
          </HBoxAtoms>

          <VBoxAtoms>
            <HBoxAtoms>
              <HeadingAtoms as='h2'>Claudio Cardoso</HeadingAtoms>
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
                  github
                </TextAtoms>
                <IconAtom $type='ArrowSquareOut' />
              </NavLinkAtoms>
            </HBoxAtoms>
            <VBoxAtoms $spacings={{ $mb: 2.4 }}>
              <TextAtoms>
                Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
                viverra massa quam dignissim aenean malesuada suscipit. Nunc,
                volutpat pulvinar vel mass.
              </TextAtoms>
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
