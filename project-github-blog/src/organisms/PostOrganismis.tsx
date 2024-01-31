import { CardHeaderPost } from '@molecules/CardHeaderPost';
import { CardMarkdownMolecules } from '@molecules/CardMarkdownMolecules';
import { HeaderMolecules } from '@molecules/HeaderMolecules';
import { REPO_DTO } from 'dto/repoDTO';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostFindByIdService } from 'services/posts/postFindByidService';

export function PostOrganismis() {
  const [postItem, setPostItem] = useState({} as REPO_DTO);
  const { user, repo, number } = useParams();
  console.log('PARAMS =>', user, repo, number);
  console.log('POSTS =>', postItem);

  async function fetchPostFindById(
    user?: string,
    repo?: string,
    number?: string
  ) {
    const response = await PostFindByIdService(user, repo, number);
    console.log('PostOrganismis =>', response.data);
    setPostItem(response.data);
  }

  useEffect(() => {
    fetchPostFindById(user, repo, number);
  }, []);

  return (
    <>
      <HeaderMolecules />
      <CardHeaderPost postItem={postItem} />
      <CardMarkdownMolecules postItem={postItem} />
    </>
  );
}
