import { RootState } from '@/store';

export function prepareHeaders(headers: Headers, { getState }: { getState: () => unknown }) {
  const { token } = (getState() as RootState).authState;

  if (token) headers.set('authorization', `Bearer ${token}`);
}
