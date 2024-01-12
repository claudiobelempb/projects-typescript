import {
  TransactionContextProps,
  TransactionDTO,
  TransactionsProviderProps
} from 'dto/TransactionDTO';
import { createContext, useEffect, useState } from 'react';
import { transactionFindAll } from 'services/transaction/transactionFindAll.service';

export const TransactionsContext = createContext({} as TransactionContextProps);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadTransactions() {
    try {
      setIsLoading(true);
      const response = await transactionFindAll();
      console.log('CONTEXT: ', response.data);
      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, isLoading }}>
      {children}
    </TransactionsContext.Provider>
  );
}
