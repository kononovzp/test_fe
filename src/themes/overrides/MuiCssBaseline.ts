import { Theme } from '@mui/material/styles';

export default function MuiCssBaseline(theme: Theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *::-webkit-scrollbar {
          width: 0.4em;
          height: 0.6em;
        }
        *::-webkit-scrollbar-track {
          background-color: ${theme.palette.grey[400]};
          border-radius: 8px;
          }
          *::-webkit-scrollbar-thumb {
            background: ${theme.palette.primary.main};
          border-radius: 8px;
        }
        *::-webkit-scrollbar-thumb:hover {
          background: ${theme.palette.primary.main}};
        }
      `,
    },
  };
}
