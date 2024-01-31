import { AxiosResponse } from 'axios';
import { api } from 'services/api';

export async function IssuesFindAllService(
  query: string = 'tecnologia'
): Promise<AxiosResponse<SEARCH_DTO>> {
  const response: AxiosResponse<SEARCH_DTO> = await api({
    method: 'GET',
    url: `/search/issues?q=${query}`
  });

  return response;
}
