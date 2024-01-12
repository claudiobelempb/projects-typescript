import { AxiosResponse } from 'axios';
import { api } from 'services/api';
import { TransactionDTO } from '../../dto/TransactionDTO';

export async function transactionFindAll(): Promise<
  AxiosResponse<TransactionDTO[]>
> {
  const response: AxiosResponse<TransactionDTO[]> = await api({
    method: 'GET',
    url: '/transactions'
  });
  return response;
}
