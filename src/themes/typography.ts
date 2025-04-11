import { TypographyVariantsOptions } from '@mui/material/styles';

const BASEFONTSIZE: number = 16;

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * BASEFONTSIZE);
}

export function pxToRem(value: number) {
  return `${value / BASEFONTSIZE}rem`;
}

const Typography = (): TypographyVariantsOptions => ({
  htmlFontSize: BASEFONTSIZE,
  fontFamily: 'Montserrat, sans-serif !important',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  // Headings
  h1: {
    fontWeight: 600,
    fontSize: pxToRem(64),
    lineHeight: '80px',
  },
  h2: {
    fontWeight: 600,
    fontSize: pxToRem(48),
    lineHeight: '56px',
  },
  h3: {
    fontWeight: 600,
    fontSize: pxToRem(32),
    lineHeight: '40px',
  },
  h4: {
    fontWeight: 700,
    fontSize: pxToRem(24),
    lineHeight: '32px',
  },
  h5: {
    fontWeight: 700,
    fontSize: pxToRem(20),
    lineHeight: '24px',
  },
  h6: {
    fontWeight: 700,
    fontSize: pxToRem(16),
    lineHeight: '24px',
  },

  // Body text
  body1: {
    fontWeight: 400,
    fontSize: pxToRem(20),
    lineHeight: '32px',
  },
  body2: {
    fontWeight: 400,
    fontSize: pxToRem(16),
    lineHeight: '24px',
  },

  // Custom variants (can be used via sx or custom mapping)
  bodySmall: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: '24px',
  },
  bodyExtraSmall: {
    fontWeight: 400,
    fontSize: pxToRem(12),
    lineHeight: '24px',
  },
  caption: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: '16px',
  },
});

export default Typography;
