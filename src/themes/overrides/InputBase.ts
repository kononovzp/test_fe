import { Theme } from '@mui/material/styles';

import { pxToRem } from '@/themes/typography';

export default function InputBase(theme: Theme) {
  return {
    MuiOutlinedInput: {
      defaultProps: {
        autoComplete: 'off',
      },
      styleOverrides: {
        input: {
          fontWeight: 400,
          fontSize: pxToRem(16),
          lineHeight: pxToRem(24),
          color: theme.palette.primary.main,
          padding: '8px 12px',
          '&::placeholder': {
            color: theme.palette.grey[300],
            fontWeight: 400,
            fontSize: pxToRem(16),
            lineHeight: pxToRem(24),
            opacity: 1,
          },
          '&.Mui-disabled': {
            '-webkit-text-fill-color': theme.palette.grey[100],
          },
          '&[type=number]::-webkit-inner-spin-button, &[type=number]::-webkit-outer-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
        },
        root: {
          borderRadius: 8,
          backgroundColor: theme.palette.common.white,
          '& fieldset': {
            borderColor: theme.palette.grey[300],
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
            borderWidth: 1,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
            borderWidth: 1,
          },
          '&.Mui-disabled': {
            pointerEvents: 'none',
            backgroundColor: 'transparent',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '& .MuiOutlinedInput-input': {
              color: 'transparent',
            },
          },
          '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.error.main,
            },
          },
          '&.custom-small-outlined-input-1': {
            '& .MuiOutlinedInput-input': {
              padding: `${pxToRem(7.5)} ${pxToRem(2)}`,
              fontSize: pxToRem(12),
              textAlign: 'center',
            },
          },
          '&.custom-small-outlined-input-2': {
            '& .MuiOutlinedInput-input': {
              padding: `${pxToRem(7.5)} ${pxToRem(12)}`,
              fontSize: pxToRem(12),
            },
          },
          '&.custom-small-outlined-input-3': {
            '& .MuiOutlinedInput-input': {
              padding: `${pxToRem(7)} ${pxToRem(12)}`,
              fontSize: pxToRem(12),
            },
          },
          '&.text-center': {
            '& .MuiOutlinedInput-input': {
              textAlign: 'center',
            },
          },
          '&.mt-0': {
            marginTop: 0,
          },
          '&.custom-disabled': {
            '&.Mui-disabled': {
              backgroundColor: theme.palette.common.white,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.grey[200],
              },
              '& .MuiOutlinedInput-input': {
                color: theme.palette.grey[900],
                WebkitTextFillColor: theme.palette.grey[900],
              },
            },
          },
          '&.custom-readonly-disabled': {
            '&.Mui-readOnly': {
              '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.grey[300],
                },
              },
              '&:focus': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.grey[300],
                },
              },
              '&:not(:focus)': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.grey[300],
                },
              },
            },
          },

          '&.custom-small-textarea': {
            padding: '5px',
            '& .MuiOutlinedInput-input': {
              fontSize: pxToRem(14),
            },
          },
          '&.custom-multiline-small-1': {
            padding: 0,
            '& .MuiOutlinedInput-input': {
              padding: `${pxToRem(12)} ${pxToRem(12)}`,
              fontSize: pxToRem(12),
            },
          },
          '&.custom-small-inner-shadow': {
            boxShadow: theme.customShadows.innerShadowBox,
            backgroundColor: theme.palette.primary[50],
            '& .MuiOutlinedInput-input': {
              padding: pxToRem(6),
              fontSize: pxToRem(10),
            },
          },
          '&.custom-small-background-input-1': {
            backgroundColor: theme.palette.primary[50],
            '& .MuiOutlinedInput-input': {
              padding: pxToRem(6),
              fontSize: pxToRem(10),
            },
          },
        },
      },
    },
  };
}
