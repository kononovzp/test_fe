import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect } from 'react';

import { useAuthContext } from './useAuthContext';
import { PATH_AUTH } from '@/routes/paths';

interface AuthGuardProps {
  children: ReactNode;
  redirectUrlOnUnAuth?: string;
}

export const AuthGuard: FC<AuthGuardProps> = ({
  children,
  redirectUrlOnUnAuth,
}: AuthGuardProps) => {
  const router = useRouter();

  const { isAuthenticated } = useAuthContext();
  console.log('isAuthenticated: ', isAuthenticated);

  useEffect(() => {
    if (router.pathname.includes(PATH_AUTH.ROOT) && !redirectUrlOnUnAuth) {
      return;
    }

    if (!isAuthenticated && !router.pathname.includes(PATH_AUTH.ROOT)) {
      (async () => {
        const query =
          router.pathname !== '/'
            ? {
                query: { backUrl: router.pathname },
              }
            : {};

        await router.push({
          pathname: PATH_AUTH.LOGIN,
          ...query,
        });
      })();

      return;
    }

    if (isAuthenticated && redirectUrlOnUnAuth) {
      (async () => {
        await router.push(redirectUrlOnUnAuth);
      })();
    }
  }, [isAuthenticated, router, redirectUrlOnUnAuth]);

  return <> {children} </>;
};
