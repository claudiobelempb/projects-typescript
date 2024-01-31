import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HBoxAtoms } from '@atoms/HBoxAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { NavLinkAtoms } from '@atoms/NavLinkAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { VBoxAtoms } from '@atoms/VBoxAtoms';

type Props = {
  user: GITHUB_USER_DTO;
};

export function CardProfile({ user }: Props) {
  return (
    <ContainerAtoms $spacings={{ $mb: 7.2 }}>
      <ContentAtoms $background='card500' $spacings={{ $mt: -10, $p: 2 }}>
        <HBoxAtoms
          $flex={{ $columnGap: 2, $alingItems: 'center' }}
          $width={{ $width: 100 }}
        >
          <HBoxAtoms
            $width={{ $maxWidth: 14.8 }}
            $height={{ $minHeight: 14.8 }}
            $background='transparent'
          >
            <ImageAtoms
              $width={{ $maxWidth: 14.8 }}
              $height={{ $minHeight: 14.8 }}
              // $spacings={{ $pb: 6 }}
              src={user.avatar_url}
            />
          </HBoxAtoms>

          <VBoxAtoms>
            <HBoxAtoms>
              <HeadingAtoms as='h2'>{user.name}</HeadingAtoms>
              <NavLinkAtoms
                to={user.html_url}
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
              <TextAtoms>{user.bio}</TextAtoms>
            </VBoxAtoms>
            <HBoxAtoms $flex={{ $justifyContent: 'flex-start', $columnGap: 2 }}>
              <HBoxAtoms
                $flex={{
                  $justifyContent: 'flex-start',
                  $alingItems: 'center',
                  $columnGap: 1
                }}
              >
                <IconAtom $type='GithubLogo' />
                <TextAtoms>{user.login}</TextAtoms>
              </HBoxAtoms>
              <HBoxAtoms
                $flex={{
                  $justifyContent: 'flex-start',
                  $alingItems: 'center',
                  $columnGap: 1
                }}
              >
                <IconAtom $type='Buildings' />
                <TextAtoms>{user.company}</TextAtoms>
              </HBoxAtoms>
              <HBoxAtoms
                $flex={{
                  $justifyContent: 'flex-start',
                  $alingItems: 'center',
                  $columnGap: 1
                }}
                $width={{ $width: 0 }}
              >
                <IconAtom $type='ChatCircle' />
                <TextAtoms>{user.following} seguidores</TextAtoms>
              </HBoxAtoms>
            </HBoxAtoms>
          </VBoxAtoms>
        </HBoxAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
