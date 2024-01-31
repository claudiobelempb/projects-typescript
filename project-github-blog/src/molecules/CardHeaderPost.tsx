import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HBoxAtoms } from '@atoms/HBoxAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { NavLinkAtoms } from '@atoms/NavLinkAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { VBoxAtoms } from '@atoms/VBoxAtoms';
import { relativeDateFormatter } from '@utils/formatter';
import { REPO_DTO } from 'dto/repoDTO';

type Props = {
  postItem: REPO_DTO;
};
export function CardHeaderPost({ postItem }: Props) {
  const formattedDate = relativeDateFormatter(postItem.created_at);

  return (
    <ContainerAtoms $spacings={{ $mb: 7.2 }}>
      <ContentAtoms $background='card500' $spacings={{ $mt: -10, $p: 2 }}>
        <HBoxAtoms
          $flex={{ $columnGap: 2, $alingItems: 'center' }}
          $width={{ $width: 100 }}
        >
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
                to={postItem.url}
                $flex={{
                  $direction: 'row',
                  $alingItems: 'center',
                  $columnGap: 1
                }}
                $color='blue500'
                $hover='white'
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
              <HeadingAtoms as='h2'>{postItem.title}</HeadingAtoms>
            </VBoxAtoms>
            <HBoxAtoms $flex={{ $justifyContent: 'flex-start', $columnGap: 2 }}>
              <HBoxAtoms
                $flex={{
                  $justifyContent: 'flex-start',
                  $alingItems: 'center',
                  $columnGap: 1
                }}
                $width={{ $width: 0 }}
              >
                <IconAtom $type='GithubLogo' />
                <TextAtoms>{postItem.user?.login}</TextAtoms>
              </HBoxAtoms>
              <HBoxAtoms
                $flex={{
                  $justifyContent: 'flex-start',
                  $alingItems: 'center',
                  $columnGap: 1
                }}
                $width={{ $width: 0 }}
              >
                <IconAtom $type='CalendarCheck' />
                <TextAtoms>{formattedDate}</TextAtoms>
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
                <TextAtoms>{postItem.comments} comentários</TextAtoms>
              </HBoxAtoms>
            </HBoxAtoms>
          </VBoxAtoms>
        </HBoxAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
