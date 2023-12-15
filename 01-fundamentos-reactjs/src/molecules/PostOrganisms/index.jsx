import { useState } from 'react';
import { SeparationAtom } from '../../atoms/SeparationAtom';
import { BoxTemplates } from '../../templates/BoxTemplates';
import { CardCommentMolecules } from '../CardCommentMolecules';
import { FormCommentMolecules } from '../FormCommentMolecules';
import { PostModules } from '../PostModules';

export function PostOrganisms() {
  const [posts, setPosts] = useState([
    {
      postId: 1,
      author: {
        authorId: 1,
        avatarUrl: 'https://github.com/claudiobelempb.png',
        name: 'claudiobelempb',
        role: 'Dev Front-End'
      },
      content: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa suscipit qui magni corporis repellat recusandae modi? Amet, quos. Pariatur aperiam sequi odit sit quis, quasi necessitatibus sint minus ipsa.',
        contact: 'claudio.design/doctorcare',
        tags: ['novoprojeto,', 'nlw', 'rocketseat'],
        publishedAt: new Date('2023-12-03 20:00:00')
      },
      comments: [
        {
          commentId: 1,
          author: {
            avatarUrl: 'https://github.com/claudiobelempb.png',
            name: 'claudiobelempb',
            role: 'Dev Front-End'
          },
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa suscipit qui magni corporis repellat recusandae modi? Amet',
          publishedAt: new Date('2023-12-03 14:00:00')
        },
        {
          commentId: 2,
          author: {
            avatarUrl: 'https://github.com/claudiobelempb.png',
            name: 'claudiobelempb',
            role: 'Dev Front-End'
          },
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa suscipit qui magni corporis repellat recusandae modi? Amet',
          publishedAt: new Date('2023-12-03 14:00:00')
        }
      ]
    },
    {
      postId: 2,
      author: {
        authorId: 2,
        avatarUrl: 'https://github.com/claudiobelempb.png',
        name: 'kaikebelempb',
        role: 'Dev Back-End'
      },
      content: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa suscipit qui magni corporis repellat recusandae modi? Amet',
        contact: 'kaike.design/doctorcare',
        tags: ['novoprojeto,', 'nlw', 'rocketseat'],
        publishedAt: new Date('2023-12-03 14:00:00')
      },
      comments: [
        {
          commentId: 1,
          author: {
            avatarUrl: 'https://github.com/claudiobelempb.png',
            name: 'claudiobelempb',
            role: 'Dev Front-End'
          },
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa suscipit qui magni corporis repellat recusandae modi? Amet',
          publishedAt: new Date('2023-12-03 14:00:00')
        }
      ]
    }
  ]);

  const [commentValue, setCommentValue] = useState('');

  function handleCreateNewComment() {
    event.preventDefault();
    setCommentValue('');
  }

  function handleNewCommentChange() {
    setCommentValue(event.target.value);
    console.log(commentValue);
  }
  return (
    <>
      {posts.map(post => (
        <BoxTemplates
          padding={2}
          borderRadius={8}
          marginTop={2}
          marginBottom={2}
          backgroundColor='#202024'
          key={post.postId}
        >
          <PostModules post={post} />
          <SeparationAtom />
          <FormCommentMolecules
            value={commentValue}
            name={commentValue}
            onChange={handleNewCommentChange}
            onSubmit={handleCreateNewComment}
          />

          <CardCommentMolecules comments={post.comments} isPressed />
        </BoxTemplates>
      ))}
    </>
  );
}
