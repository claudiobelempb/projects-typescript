import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { useState } from 'react';
import { AvatarAtoms } from '../../atoms/AvatarAtoms';
import { BoxTemplates } from '../../templates/BoxTemplates';
import { ContentTemplates } from '../../templates/ContentTemplates';
import styles from './styles.module.css';

export function CardCommentMolecules({ comment, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(comment.commentId);
  }

  const [likesCount, setLikesCount] = useState(0);

  function handleLikesCount() {
    setLikesCount(prevState => prevState + 1);
  }

  console.log(likesCount);
  return (
    <article className={styles.cardCommentContainer}>
      <ContentTemplates isWidth columnGap={1} marginTop={1} isDirection>
        <BoxTemplates isFlex>
          <AvatarAtoms src={'comment.author?.avatarUrl'} />
        </BoxTemplates>
        <BoxTemplates>
          <BoxTemplates
            isDirection
            backgroundColor='#29292E'
            padding={1}
            borderRadius={8}
          >
            <BoxTemplates isDisplay rowGap={0.5}>
              <span>
                <strong>{'comment.author?.name'}</strong> (você)
              </span>
              <time title='11 de maio ás 08:13h' dateTime='2023-05-11 08:00:00'>
                Cerca de 2h atrás
              </time>
              <p>{comment.content}</p>
            </BoxTemplates>
            <BoxTemplates isFlex>
              <button onClick={handleDeleteComment}>
                <Trash size={20} />
              </button>
            </BoxTemplates>
          </BoxTemplates>
          <BoxTemplates
            marginTop={1}
            isDirection
            columnGap={0.5}
            alignItems='center'
          >
            <button onClick={handleLikesCount}>
              <div style={{ display: 'flex', columnGap: 10 }}>
                <ThumbsUp size={20} /> Aplaudir • {likesCount}
              </div>
            </button>
          </BoxTemplates>
        </BoxTemplates>
      </ContentTemplates>
    </article>
  );
}
