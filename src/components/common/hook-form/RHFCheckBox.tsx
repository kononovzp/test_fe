import { JSX } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import { Box, BoxProps, Stack } from '@mui/material';

import { pxToRem } from '@/themes/typography';

interface RHFCheckboxProps extends Omit<FormControlLabelProps, 'control' | 'label'> {
  children?: JSX.Element;
  name: string;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  checkboxClassName?: string;
  errorBoxProps?: BoxProps;
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RHFCheckBox({
  children,
  name,
  helperText,
  checkboxClassName,
  errorBoxProps,
  onCheckboxChange,
  label,
  ...other
}: RHFCheckboxProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack>
          <Stack flexDirection="row" alignItems="center">
            {label ? (
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    checked={field.value}
                    className={checkboxClassName}
                    onChange={(e) => {
                      field.onChange(e.target.checked);
                      onCheckboxChange && onCheckboxChange(e);
                    }}
                  />
                }
                label={label}
                {...other}
              />
            ) : (
              <Checkbox
                {...field}
                checked={field.value}
                className={checkboxClassName}
                onChange={(e) => {
                  field.onChange(e.target.checked);
                  onCheckboxChange && onCheckboxChange(e);
                }}
              />
            )}
            {children}
          </Stack>

          {(!!error || helperText) && (
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={0.5}
              sx={{ mt: '0' }}
              {...errorBoxProps}
            >
              <FormHelperText sx={{ fontSize: pxToRem(10) }} error={!!error}>
                {error ? error?.message : helperText}
              </FormHelperText>
            </Box>
          )}
        </Stack>
      )}
    />
  );
}
