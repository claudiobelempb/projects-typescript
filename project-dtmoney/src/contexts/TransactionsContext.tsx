import {
  TransactionContextProps,
  TransactionCreateDTO,
  TransactionDTO,
  TransactionsProviderProps
} from 'dto/TransactionDTO';
import { useCallback, useEffect, useState } from 'react';
import { transactionCreate } from 'services/transaction/transactionCreate';
import { transactionFindAll } from 'services/transaction/transactionFindAll.service';
import { createContext } from 'use-context-selector';

export const TransactionsContext = createContext({} as TransactionContextProps);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateTransaction = useCallback(
    async (data: TransactionCreateDTO) => {
      const { description, category, price, type } = data;

      const response = await transactionCreate({
        description,
        category,
        price,
        type,
        createdAt: new Date()
      });

      setTransactions(state => [response.data, ...state]);
    },
    []
  );

  const fetchTransactions = useCallback(async (query?: string) => {
    try {
      setIsLoading(true);
      const response = await transactionFindAll(query);
      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        isLoading,
        handleCreateTransaction
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
