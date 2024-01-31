import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState
} from 'react';
import { IssuesFindAllService } from 'services/issues/IssuesFindAllService';

export type IssuesContextProps = {
  issues: ITEM_DTO[];
  isLoadingIssues: boolean;
  fetchIssues: (query?: string) => Promise<void>;
};

export type IssuesProviderProps = {
  children: ReactNode;
};

export const IssuesContext = createContext({} as IssuesContextProps);

export function InssuesProvider({ children }: IssuesProviderProps) {
  const [isLoadingIssues, setIsLoadingIssues] = useState(false);
  const [issues, setIssues] = useState<ITEM_DTO[]>([]);
  // console.log('ISSUES =>', issues?.items);

  const fetchIssues = useCallback(async (query?: string) => {
    try {
      setIsLoadingIssues(true);
      const response = await IssuesFindAllService(query);
      setIssues(response.data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingIssues(false);
    }
  }, []);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <IssuesContext.Provider
      value={{
        issues,
        isLoadingIssues,
        fetchIssues
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
}
