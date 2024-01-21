import { AxiosResponse } from 'axios';
import { api } from 'services/api';
import { TransactionDTO } from '../../dto/TransactionDTO';

export async function transactionFindAll(
  query?: string
): Promise<AxiosResponse<TransactionDTO[]>> {
  const response: AxiosResponse<TransactionDTO[]> = await api({
    method: 'GET',
    url: `transactions`,
    params: {
      _sort: 'createdAt',
      _order: 'desc',
      q: query
    }
  });
  // console.log(response.data);
  return response;
}
