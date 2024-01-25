import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { VBoxAtoms } from '@atoms/VBoxAtoms';
import Markdown from 'react-markdown';

type MarkdownProps = {
  content: JSX.Element;
};

export function CardMarkdownMolecules() {
  return (
    <ContainerAtoms>
      <ContentAtoms>
        <VBoxAtoms>
          <Markdown># Hi This is **not** a paragraph.3</Markdown>
        </VBoxAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
