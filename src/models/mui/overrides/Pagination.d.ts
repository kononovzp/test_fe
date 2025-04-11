// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Pagination from '@mui/material/Pagination';

declare module '@mui/material/Pagination' {
  interface PaginationPropsColorOverrides {
    error;
    success;
    warning;
    info;
  }
  interface PaginationPropsVariantOverrides {
    contained;
    combined;
  }
}
