import { createContext, FC, useEffect, useMemo, useState } from 'react';

import { useAppSelector } from '@/store/hooks';
import { getIsAuthSelector } from '@/store/selectors';
import { AuthContextType, AuthProviderProps } from './interfaces';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const token = useAppSelector(getIsAuthSelector);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    setIsAuthenticated(Boolean(token));
  }, [token]);

  const memoizedValue = useMemo(
    () => ({
      isAuthenticated,
    }),
    [isAuthenticated]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
};
