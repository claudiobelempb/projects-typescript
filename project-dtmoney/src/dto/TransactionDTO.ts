import { ReactNode } from 'react';

export type TransactionDTO = {
  id?: string;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: Date;
};

export type TransactionCreateDTO = {
  id?: string;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
};

export type TransactionContextProps = {
  transactions: TransactionDTO[];
  isLoading: boolean;
  fetchTransactions: (query?: string) => Promise<void>;
  handleCreateTransaction: (data: TransactionCreateDTO) => Promise<void>;
};

export type TransactionsProviderProps = {
  children: ReactNode;
};
