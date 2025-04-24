import { useRef } from 'react';
import { useDropzone, DropzoneOptions, FileRejection, DropEvent } from 'react-dropzone';
import { Box, useTheme, Stack, CardMedia, SxProps, Typography } from '@mui/material';
import { t } from 'i18next';
import { enqueueSnackbar } from 'notistack';

import { SVGIcon } from '@/components/common/svg-icon';
import { ErrorBox } from '../inputs';

interface PhotoDropzoneProps {
  onDrop: DropzoneOptions['onDrop'];
  value: File | string | null;
  maxFileSize?: number;
  error?: {
    message?: string;
  };
  onBlur?: () => void;
  loading?: boolean;
  minImageHeight?: number;
  minImageWidth?: number;
  previewBorderRadius?: string;
  previewWidth?: string;
  previewObjectFit?: string;
  containerStyle?: SxProps;
}

const PhotoDropzone = ({
  onDrop,
  onBlur,
  value,
  maxFileSize,
  loading,
  error,
  minImageHeight = 300,
  minImageWidth = 300,
  containerStyle = {},
  previewBorderRadius = '50%',
  previewWidth = '260px',
  previewObjectFit = 'cover',
}: PhotoDropzoneProps) => {
  const { palette, breakpoints } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => {
      const file = acceptedFiles[0];
      if (file) {
        const image = new Image();
        image.src = URL.createObjectURL(file);

        image.onload = () => {
          if (image.width < minImageWidth || image.height < minImageHeight) {
            enqueueSnackbar(
              t('errors.imageTooSmall', {
                width: minImageWidth,
                height: minImageHeight,
              }),
              { variant: 'error' }
            );
          } else {
            onDrop && onDrop(acceptedFiles, fileRejections, event);
          }
        };
      }
    },
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg'],
      'image/svg+xml': ['.svg'],
    },
    multiple: false,
    ...(maxFileSize && { maxSize: maxFileSize * 1000000 }),
    onDropRejected: (fileRejections) => {
      if (fileRejections.length && maxFileSize) {
        const isFileExceedsMaxSize = fileRejections.some((fileRejection) =>
          fileRejection.errors.some((error) => error.code === 'file-too-large')
        );
        if (isFileExceedsMaxSize) {
          enqueueSnackbar(t('errors.fileSizeExceeds', { value: maxFileSize }), {
            variant: 'error',
          });
        }
      }
    },
  });

  return (
    <>
      <Box
        {...getRootProps()}
        sx={{
          height: '100%',
          width: '100%',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxHeight: '266px',
          p: '40px 20px',
          cursor: 'pointer',
          border: `2px dashed ${palette.common.white}`,
          ...(error && {
            border: `2px dashed ${palette.error.main}`,
          }),
          [breakpoints.down('sm')]: {
            width: '100%',
            p: '0',
          },
          ...containerStyle,
        }}
        onClick={() => inputRef?.current?.click()}
        onTouchEnd={() => inputRef?.current?.click()}
      >
        <input {...getInputProps()} onBlur={onBlur} ref={inputRef} style={{ display: 'none' }} />
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {!value && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              <SVGIcon name="upload" fill={palette.primary[100]} width={24} height={24} />
              <Typography variant="bodySmall" color={palette.common.white}>
                {t('common.dropFile')}
              </Typography>
            </Box>
          )}
          {value && (
            <Stack
              sx={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  width: previewWidth,
                  borderRadius: previewBorderRadius,
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  src={value instanceof File ? URL.createObjectURL(value) : value}
                  component="img"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: previewObjectFit,
                  }}
                />
              </Box>
            </Stack>
          )}
        </Box>
      </Box>
      <ErrorBox error={error?.message} />
    </>
  );
};

export default PhotoDropzone;
