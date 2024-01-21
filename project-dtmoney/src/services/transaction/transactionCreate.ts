import { AxiosResponse } from 'axios';
import { TransactionDTO } from 'dto/TransactionDTO';
import { api } from 'services/api';

export async function transactionCreate(
  data: TransactionDTO
): Promise<AxiosResponse<TransactionDTO>> {
  const response: AxiosResponse<TransactionDTO> = await api({
    method: 'POST',
    url: '/transactions',
    data
  });
  console.log(response.data);
  return response;
}
