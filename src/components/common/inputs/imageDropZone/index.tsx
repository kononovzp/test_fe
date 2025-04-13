import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import { Box, Typography, IconButton, useTheme, Stack, Button, Modal } from '@mui/material';
import { t } from 'i18next';
import { enqueueSnackbar } from 'notistack';
import ReactCrop, { centerCrop, Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import { SVGIcon } from '@/components/common/svg-icon';

interface IImageDropZoneProps {
  value: string | File | null;
  maxFileSize?: number;
  error?: {
    message?: string;
  };
  onBlur?: () => void;
  onDrop: (img: File) => void;
  cropImage?: boolean;
  cropAspectRatio?: number;
}

const ImageDropZone = ({
  onDrop,
  onBlur,
  error,
  value,
  maxFileSize,
  cropImage,
  cropAspectRatio,
}: IImageDropZoneProps) => {
  const { palette, customShadows } = useTheme();

  const [image, setImage] = useState<File | string | null>(null);
  const [crop, setCrop] = useState<Crop>();
  const [isCropperShown, setIsCropperShown] = useState<boolean>(false);
  const [cropImageScale, setCropImageScale] = useState<{
    x: number;
    y: number;
  }>();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        if (!file) return;

        if (cropImage) {
          setIsCropperShown(true);
          setImage(file);
        } else {
          onDrop(file);
        }
      }
    },
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    multiple: false,
    ...(!!maxFileSize && { maxSize: maxFileSize * 1000000 }),
    onDropRejected: (fileRejections) => {
      if (fileRejections.length && maxFileSize) {
        const isFileExceedsMaxSize = fileRejections.some((fileRejection) =>
          fileRejection.errors.some((error) => error.code === 'file-too-large')
        );
        if (isFileExceedsMaxSize) {
          enqueueSnackbar(t('dropzone.fileExceedsMaxSize', { value: maxFileSize }), {
            variant: 'error',
          });
        }
      }
    },
  });

  const cropImageUrl = useMemo(() => {
    if (typeof image === 'string') return image;
    if (image instanceof File) return URL.createObjectURL(image);
  }, [image]);

  const handleCropImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const cropImage = e.currentTarget;
      const { width, height, naturalWidth, naturalHeight } = cropImage;
      const cropImageScaleX = naturalWidth / width;
      const cropImageScaleY = naturalHeight / height;
      setCropImageScale({ x: cropImageScaleX, y: cropImageScaleY });

      let cropWidth = width * 0.9;
      let cropHeight = height * 0.9;

      if (cropAspectRatio) {
        if (cropWidth / cropAspectRatio <= cropHeight) {
          cropHeight = cropWidth / cropAspectRatio;
        } else {
          cropWidth = cropHeight * cropAspectRatio;
        }
      }

      setCrop(
        centerCrop(
          {
            unit: 'px',
            width: cropWidth,
            height: cropHeight,
          },
          width,
          height
        )
      );
    },
    [setCropImageScale, cropAspectRatio]
  );

  const handleApplyCrop = useCallback(async () => {
    if (!cropImageScale) return;
    if (!(image instanceof File)) return;
    if (!crop || crop.width === 0 || crop.height === 0) return;

    const canvas = document.createElement('canvas');
    const { x: scaleX, y: scaleY } = cropImageScale;
    canvas.width = crop.width * scaleX;
    canvas.height = crop.height * scaleY;
    const ctx = canvas.getContext('2d');

    if (!ctx) throw new Error('No 2d context');

    const imageBitmap = await createImageBitmap(image);

    ctx.drawImage(
      imageBitmap,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const croppedImage = new File([blob], image.name, {
          type: 'image/jpeg',
        });

        setImage(null);
        setIsCropperShown(false);
        onDrop(croppedImage);
      },
      'image/jpeg',
      0.8
    );
  }, [crop, cropImageScale, image, onDrop]);

  const activeStyle = {
    borderColor: palette.primary[900],
    backgroundColor: palette.primary[50],
  };

  return (
    <>
      <Box
        {...getRootProps()}
        sx={{
          height: '100%',
          width: '100%',
          borderRadius: '10px',
        }}
      >
        <input {...getInputProps()} onBlur={onBlur} />
        <Box
          sx={{
            borderRadius: 3,
            borderWidth: value ? 0 : 2,
            borderStyle: 'dashed',
            borderColor: palette.primary[400],
            width: '100%',
            height: '100%',
            ...(error && {
              borderColor: palette.error.main,
            }),
            ...(isDragActive ? activeStyle : {}),
          }}
        >
          {!value && (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <Stack sx={{ alignItems: 'center', gap: 2, px: 2 }}>
                <SVGIcon name="add" color={palette.primary[400]} width={32} />
                <Typography
                  variant="body4"
                  fontWeight={700}
                  color={palette.primary[600]}
                  textAlign={'center'}
                >
                  {t('inputs.photo.dropzoneTitle')}
                </Typography>
              </Stack>
            </Box>
          )}

          {value && (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <Image
                src={typeof value === 'string' ? value : URL.createObjectURL(value)}
                alt="Uploaded"
                layout="fill"
                objectFit="contain"
                style={{
                  borderRadius: '10px',
                }}
              />
              <IconButton
                component="span"
                sx={{
                  backgroundColor: palette.primary[800],
                  borderRadius: 16,
                  position: 'absolute',
                  right: -4,
                  bottom: -4,
                }}
              >
                <SVGIcon name="gallery" width={18} height={18} color={palette.common.white} />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
      {isCropperShown && (
        <Modal open onClose={() => setIsCropperShown(false)}>
          <Box
            maxWidth="lg"
            sx={{
              backgroundColor: palette.background.paper,
              px: 3,
              py: 1.5,
              borderRadius: 6,
              boxShadow: customShadows.card,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxHeight: '100vh',
              maxWidth: '90vw',
            }}
          >
            <ReactCrop
              crop={crop}
              onChange={(c) => setCrop(c)}
              minWidth={1}
              minHeight={1}
              aspect={cropAspectRatio}
            >
              {cropImageUrl && (
                <Image
                  src={cropImageUrl}
                  onLoad={handleCropImageLoad}
                  alt={image instanceof File ? image.name : cropImageUrl}
                  layout="intrinsic"
                  width={400}
                  height={400}
                />
              )}
            </ReactCrop>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
              <Button variant="contained" onClick={handleApplyCrop} sx={{ width: 120 }}>
                {t('common.apply')}
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ImageDropZone;
