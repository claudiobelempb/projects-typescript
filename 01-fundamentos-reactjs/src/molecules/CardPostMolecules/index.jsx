import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { SeparationAtom } from '../../atoms/SeparationAtom';
import { uuidv4 } from '../../utils/uuidv4';
import { CardCommentMolecules } from '../CardCommentMolecules';
import { FormCommentMolecules } from '../FormCommentMolecules';
import styles from './post.module.css';

import { useState } from 'react';
import { AvatarAtoms } from '../../atoms/AvatarAtoms/index';
import { BoxTemplates } from '../../templates/BoxTemplates/index';

export function CardPostMolecules({ post }) {
  const [comments, setComments] = useState([
    {
      commentId: '2817ecf9-8271-40b1-99a0-13fd3e6f59b3',
      content: 'Comment 01'
    },
    {
      commentId: '962f6486-3604-4c40-88de-8d8be6dd0245',
      content: 'Cooment 02'
    }
  ]);
  const [descriptionInput, setDescriptionInput] = useState('');

  const publishedFormatted = format(
    post?.content.publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBr
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(
    post?.content.publishedAt,
    {
      locale: ptBr,
      addSuffix: true
    }
  );

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([
      ...comments,
      { commentId: uuidv4(), content: descriptionInput }
    ]);
    setDescriptionInput('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setDescriptionInput(event.target.value);
  }

  function deleteComment(commentId) {
    const newComments = comments.filter(c => c.commentId !== commentId);
    setComments(newComments);
  }

  function handleNewComentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  const isNewCommentEmpty = descriptionInput.length === 0;

  return (
    <BoxTemplates>
      <article className={styles.postContainer}>
        <header>
          <div className={styles.author}>
            <AvatarAtoms isBorder src={''} />
            <div className={styles.authorInfo}>
              <strong>{'post.author.name'}</strong>
              <span>{'post.author.role'}</span>
            </div>
          </div>
          {/* <div className={styles.author}>
            <AvatarAtoms isBorder src={post?.author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{post.author.name}</strong>
              <span>{post.author.role}</span>
            </div>
          </div> */}
          <time
            title={publishedFormatted}
            dateTime={post?.content.publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </header>
        <div className={styles.content}>
          <p>{post?.content.title} 👋</p>
          <p>{post?.content.description}</p>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            👉 {post?.content.contact}
          </a>
          <ul>
            {post?.content.tags.map(tag => (
              <li key={tag}>
                <a href='#'>#{tag}</a>
              </li>
            ))}
          </ul>
        </div>
      </article>
      <FormCommentMolecules
        value={descriptionInput}
        name={descriptionInput}
        onChange={handleNewCommentChange}
        onSubmit={handleCreateNewComment}
        required
        onInvalid={handleNewComentInvalid}
        disabled={isNewCommentEmpty}
      />
      <SeparationAtom />

      {comments.map(comment => (
        <CardCommentMolecules
          onDeleteComment={deleteComment}
          key={comment?.commentId}
          comment={comment}
        />
      ))}
    </BoxTemplates>
  );
}
