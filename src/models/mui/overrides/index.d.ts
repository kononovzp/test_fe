// material-ui
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Color from '@mui/material';

declare module '@mui/material' {
  interface Color {
    0?: string;
    A50?: string;
    A800?: string;
  }
}

// react-table
declare module '@tanstack/react-table' {
  export interface ColumnMeta {
    className?: string;
  }

  export interface TableMeta {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    revertData?: (rowIndex: number, revert: unknown) => void;
    selectedRow?: any;
    setSelectedRow?: any;
  }
}
