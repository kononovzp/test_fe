import { Box, BoxProps, FormHelperText, Stack, useTheme } from '@mui/material';

import { SVGIcon } from '@/components/common/svg-icon';
import { pxToRem } from '@/themes/typography';

interface IErrorBoxProps extends BoxProps {
  error?: string;
}

const ErrorBox = ({ error, ...rest }: IErrorBoxProps) => {
  const { palette } = useTheme();

  return (
    <Box mt={0.5} sx={{ minHeight: '1.5em' }} {...rest}>
      {!!error && (
        <Stack flexDirection="row" alignItems="center" gap={0.5}>
          <SVGIcon name="warning" color={palette.error.main} width={12} height={12} />
          <FormHelperText
            error={!!error}
            sx={{
              fontSize: pxToRem(10),
              lineHeight: pxToRem(12),
              fontWeight: 400,
              margin: 0,
            }}
          >
            {error}
          </FormHelperText>
        </Stack>
      )}
    </Box>
  );
};

export default ErrorBox;
