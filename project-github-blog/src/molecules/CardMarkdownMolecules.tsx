import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { VBoxAtoms } from '@atoms/VBoxAtoms';
import { REPO_DTO } from 'dto/repoDTO';
import Markdown from 'react-markdown';

type Props = {
  postItem: REPO_DTO;
};
export function CardMarkdownMolecules({ postItem }: Props) {
  return (
    <ContainerAtoms>
      <ContentAtoms>
        <VBoxAtoms>
          <Markdown>{postItem.body}</Markdown>
        </VBoxAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
