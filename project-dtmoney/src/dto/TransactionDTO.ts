import { ReactNode } from 'react';

export type TransactionDTO = {
  transactionId: string;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
};

export type TransactionContextProps = {
  transactions: TransactionDTO[];
  isLoading: boolean;
};

export type TransactionsProviderProps = {
  children: ReactNode;
};
