import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PATH_AUTH, PATH_MAIN } from '@/routes/paths';
import { useAuthContext } from '@/auth';
import { Box } from '@mui/material';

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(PATH_MAIN.MOVIES);
    } else {
      router.push(PATH_AUTH.LOGIN);
    }
  }, [isAuthenticated, router]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '100vh',
      }}
    />
  );
}
