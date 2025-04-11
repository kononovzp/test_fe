import { alpha } from '@mui/material/styles';

import { CustomShadowProps } from '@/models/mui/theme';

import { COLORS } from './palette';

const CustomShadows = (): CustomShadowProps => ({
  card: `2px 2px 23px 0px ${alpha(COLORS.black, 0.06)}`,
  cardHover: `0px 4px 10px ${alpha(COLORS.black, 0.1)}`,
});

export default CustomShadows;
