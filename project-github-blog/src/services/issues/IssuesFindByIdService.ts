import { AxiosResponse } from 'axios';
import { api } from 'services/api';

export async function IssuesFindByIdService(
  userName?: string,
  repoName?: string,
  issuesNumber?: string
): Promise<AxiosResponse<GITHUB_USER_DTO>> {
  const response: AxiosResponse<GITHUB_USER_DTO> = await api({
    method: 'GET',
    url: `/repos`,
    params: {
      userName,
      repoName,
      issuesNumber
    }
  });

  return response;
}
