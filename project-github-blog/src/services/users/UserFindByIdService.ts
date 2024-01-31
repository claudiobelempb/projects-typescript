import { AxiosResponse } from 'axios';
import { api } from 'services/api';

export async function UserFindByIdService(
  id?: number
): Promise<AxiosResponse<GITHUB_USER_DTO>> {
  const response: AxiosResponse<GITHUB_USER_DTO> = await api({
    method: 'GET',
    url: `/users`,
    params: {
      id
    }
  });
  // console.log(response.data);
  return response;
}
