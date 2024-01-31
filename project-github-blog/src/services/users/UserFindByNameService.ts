import { AxiosResponse } from 'axios';
import { api } from 'services/api';

export async function UserFindByNameService(
  userName?: string
): Promise<AxiosResponse<GITHUB_USER_DTO>> {
  const response: AxiosResponse<GITHUB_USER_DTO> = await api({
    method: 'GET',
    url: `/users/claudiobelempb`,
    params: {
      userName
    }
  });
  // console.log(response.data);
  return response;
}
