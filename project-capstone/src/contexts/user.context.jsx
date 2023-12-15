import { createContext, useState } from 'react';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUse: () => null,
});

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUse] = useState(null);
  const value = { currentUser, setCurrentUse};

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}