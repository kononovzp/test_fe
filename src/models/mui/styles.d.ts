/* eslint-disable @typescript-eslint/no-unused-vars */
import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import { TypographyVariants, TypographyVariantsOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  // Extending TypographyVariants to include your new typography variants
  interface TypographyVariants {
    h1: React.CSSProperties;
    h1Bold: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    h3SemiBold: React.CSSProperties;
    h4SemiBold: React.CSSProperties;
    h4Medium: React.CSSProperties;
    h5SemiBold: React.CSSProperties;
    h5Medium: React.CSSProperties;
    h5: React.CSSProperties;
    body1Medium: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    body2Medium: React.CSSProperties;
    body3Bold: React.CSSProperties;
    body3Medium: React.CSSProperties;
    body3: React.CSSProperties;
    body4Light: React.CSSProperties;
    body4Medium: React.CSSProperties;
    body4: React.CSSProperties;
    bodySmall: React.CSSProperties;
    bodyExtraSmall: React.CSSProperties;
    caption: React.CSSProperties;
  }

  // Extend TypographyVariantsOptions to match the above variants in case they are used in theme overrides
  interface TypographyVariantsOptions {
    h1?: React.CSSProperties;
    h1Bold?: React.CSSProperties;
    h2?: React.CSSProperties;
    h3?: React.CSSProperties;
    h3SemiBold?: React.CSSProperties;
    h4SemiBold?: React.CSSProperties;
    h4Medium?: React.CSSProperties;
    h5SemiBold?: React.CSSProperties;
    h5Medium?: React.CSSProperties;
    h5?: React.CSSProperties;
    body1Medium?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    body2Medium?: React.CSSProperties;
    body3Bold?: React.CSSProperties;
    body3Medium?: React.CSSProperties;
    body3?: React.CSSProperties;
    body4Light?: React.CSSProperties;
    body4Medium?: React.CSSProperties;
    body4?: React.CSSProperties;
    cta?: React.CSSProperties;
    linkButtonLUnderlining?: React.CSSProperties;
    linkButtonL?: React.CSSProperties;
    linkButtonSUnderlining?: React.CSSProperties;
    linkButtonS?: React.CSSProperties;
    microcopyLight?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    bodyExtraSmall?: React.CSSProperties;
    caption?: React.CSSProperties;
  }

  // Extend Palette to include custom color options
  interface Palette {
    custom: {
      errorMessage: string;
      errorContainer: string;
      yellow: string;
      green: string;
      blue: string;
      pink: string;
      brown: string;
      success: string;
      newMessage: string;
      notification: string;
      inProgress: string;
      pending: string;
      overdue: string;
      notStarted: string;
      bgBlocking: string;
      bgNotStarted: string;
      bgRequired: string;
      bgFbLabel: string;
      tyIcon: string;
    };
  }

  // Extend PaletteOptions to allow setting these colors during theme creation
  interface PaletteOptions {
    custom?: {
      errorMessage?: string;
      errorContainer?: string;
      yellow?: string;
      green?: string;
      blue?: string;
      pink?: string;
      brown?: string;
      success?: string;
      newMessage?: string;
      notification?: string;
      inProgress?: string;
      pending?: string;
      overdue?: string;
      notStarted?: string;
      bgBlocking?: string;
      bgNotStarted?: string;
      bgRequired?: string;
      bgFbLabel?: string;
      tyIcon?: string;
    };
  }
}
