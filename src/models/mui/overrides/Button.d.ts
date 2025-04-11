// eslint-disable-next-line
import * as Button from '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    text;
    link;
    light;
    outlined;
    contained;
  }
  interface ButtonPropsSizeOverrides {
    extraSmall;
  }
}
