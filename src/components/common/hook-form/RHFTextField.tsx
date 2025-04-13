import { Box, TextField, TextFieldProps, Typography } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

type Props = TextFieldProps & {
  name: string;
  noBorder?: boolean;
  label?: string;
  placeholder?: string;
  readOnly?: boolean;
};

export default function RHFTextField({
  name,
  noBorder = false,
  label,
  multiline,
  placeholder,
  ...other
}: Props) {
  const { control } = useFormContext();

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {label && (
        <Typography variant="subtitle1" gutterBottom sx={{ mb: 0.5 }}>
          {label}
        </Typography>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            fullWidth
            multiline={multiline}
            error={!!error}
            helperText={error?.message}
            placeholder={placeholder}
            InputProps={{
              disableUnderline: noBorder,
              sx: { padding: '4px' },
            }}
            {...other}
          />
        )}
      />
    </Box>
  );
}
