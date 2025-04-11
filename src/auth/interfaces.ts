import { ReactNode } from 'react';

export interface AuthContextType {
  isAuthenticated: boolean;
}

export interface AuthProviderProps {
  children: ReactNode;
}
