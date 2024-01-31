import { AxiosResponse } from 'axios';
import { REPO_DTO } from 'dto/repoDTO';
import { api } from 'services/api';

// https://api.github.com/repos/claudiobelempb/projects-typescript/issues/2

export async function PostFindByIdService(
  user?: string,
  repo?: string,
  number?: string
): Promise<AxiosResponse<REPO_DTO>> {
  const response: AxiosResponse<REPO_DTO> = await api({
    method: 'GET',
    url: `/repos/${user}/${repo}/issues/${number}`,
    params: {
      user,
      repo,
      number
    }
  });
  // console.log('REPO =>', response.data);
  return response;
}
