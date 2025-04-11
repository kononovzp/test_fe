import { BoxProps, OutlinedInput, OutlinedInputProps, Stack } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

import { ErrorBox, Label } from '@/components/inputs';

type Props = OutlinedInputProps & {
  name: string;
  errorBoxProps?: BoxProps;
  onChangeInput?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  showZeroValue?: boolean;
  hideNegativeNumbers?: boolean;
};

export default function RHFOutlinedInput({
  name,
  inputProps,
  errorBoxProps,
  onChangeInput,
  showZeroValue = false,
  hideNegativeNumbers = false,
  ...rest
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const value = field.value ?? '';

        let displayValue = value;

        if (typeof value === 'number') {
          if (value < 0 && hideNegativeNumbers) {
            displayValue = '';
          } else if (value === 0 && !showZeroValue) {
            displayValue = '';
          }
        }

        return (
          <Stack
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            {rest.label && <Label>{rest.label}</Label>}
            <OutlinedInput
              {...field}
              value={displayValue}
              onChange={(event) => {
                let newValue = event.target.value;
                if (inputProps?.type === 'phone') {
                  newValue = newValue.replace(/[^0-9]/g, '');
                  if (newValue.split('.').length > 2) {
                    newValue = newValue.slice(0, -1);
                  }
                }

                if (inputProps?.type === 'number') {
                  newValue = newValue.replace(/[^0-9]/g, '');
                  if (newValue.startsWith('0') && newValue.length > 1) {
                    newValue = newValue.replace(/^0+/, '');
                  }
                  if (newValue.split('.').length > 2) {
                    newValue = newValue.slice(0, -1);
                  }
                }
                field.onChange(newValue);
                onChangeInput && onChangeInput(event);
              }}
              fullWidth
              error={!!error}
              {...rest}
              label={null}
            />
            <ErrorBox error={error?.message} {...errorBoxProps} />
          </Stack>
        );
      }}
    />
  );
}
