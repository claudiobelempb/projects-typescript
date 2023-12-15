import { useState } from 'react';
import { AsideMolecules } from '../../molecules/AsideMolecules';
import { CardPostMolecules } from '../../molecules/CardPostMolecules';
import { HeaderMolecules } from '../../molecules/HeaderMolecules';
import { BoxTemplates } from '../../templates/BoxTemplates';
import { ContainerTemplates } from '../../templates/ContainerTemplates';
import { ContentTemplates } from '../../templates/ContentTemplates';

export function PostOrganisms() {
  const [authors, setAuthors] = useState([
    {
      authorId: 1,
      avatarUrl: 'https://github.com/claudiobelempb.png',
      name: 'claudiobelempb',
      role: 'Dev Front-End'
    },
    {
      authorId: 2,
      avatarUrl: 'https://github.com/claudiobelempb.png',
      name: 'kaikebelempb',
      role: 'Dev Back-End'
    }
  ]);
  // const [comments, setComments] = useState([
  //   {
  //     commentId: 1,
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa suscipit qui magni corporis repellat recusandae modi? Amet',
  //     publishedAt: new Date('2023-12-03 14:00:00')
  //   },
  //   {
  //     commentId: 2,
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa suscipit qui magni corporis repellat recusandae modi? Amet',
  //     publishedAt: new Date('2023-12-03 14:00:00')
  //   },
  //   {
  //     commentId: 3,
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa suscipit qui magni corporis repellat recusandae modi? Amet',
  //     publishedAt: new Date('2023-12-03 14:00:00')
  //   }
  // ]);
  const [posts, setPosts] = useState([
    {
      postId: 1,
      authorId: 1,
      content: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa suscipit qui magni corporis repellat recusandae modi? Amet, quos. Pariatur aperiam sequi odit sit quis, quasi necessitatibus sint minus ipsa.',
        contact: 'claudio.design/doctorcare',
        tags: ['novoprojeto,', 'nlw', 'rocketseat'],
        publishedAt: new Date('2023-12-03 20:00:00')
      },
      comments: [{ commentId: 1 }, { commentId: 2 }]
    },
    {
      postId: 2,
      authorId: 2,
      content: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa suscipit qui magni corporis repellat recusandae modi? Amet',
        contact: 'kaike.design/doctorcare',
        tags: ['novoprojeto,', 'nlw', 'rocketseat'],
        publishedAt: new Date('2023-12-03 14:00:00')
      },
      comments: [{ commentId: 3 }]
    }
  ]);

  return (
    <ContainerTemplates>
      <ContentTemplates isWidth>
        <HeaderMolecules />
      </ContentTemplates>
      <ContentTemplates columnGap={1.6} isDirection>
        <AsideMolecules />
        <BoxTemplates marginTop={2}>
          {posts.map(post => (
            <BoxTemplates
              key={post.postId}
              backgroundColor={'#202024'}
              padding={2}
              borderRadius={8}
              marginBottom={1.6}
            >
              <CardPostMolecules post={post} />
            </BoxTemplates>
          ))}
        </BoxTemplates>
      </ContentTemplates>
    </ContainerTemplates>
  );
}
