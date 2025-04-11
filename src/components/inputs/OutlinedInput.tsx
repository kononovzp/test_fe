import {
  OutlinedInput as OutlinedInputMUI,
  OutlinedInputProps,
  Box,
  BoxProps,
} from '@mui/material';

import Label from './Label';
import ErrorBox from './ErrorBox';

type Props = OutlinedInputProps & {
  errorMessage?: string;
  errorBoxProps?: BoxProps;
};

const OutlinedInput = ({ errorMessage, errorBoxProps, ...rest }: Props) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {rest.label && <Label>{rest.label}</Label>}
      <OutlinedInputMUI {...rest} error={!!errorMessage} fullWidth label={null} />
      <ErrorBox error={errorMessage} {...errorBoxProps} />
    </Box>
  );
};

export default OutlinedInput;
