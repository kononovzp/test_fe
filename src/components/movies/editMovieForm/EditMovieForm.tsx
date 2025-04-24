import { useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { t } from 'i18next';
import { enqueueSnackbar } from 'notistack';

import { FormProvider, RHFOutlinedInput } from '@/components/common/hook-form';
import { IMovie } from '@/models/movies';
import { EditMovieFields, MAX_AVATAR_SIZE } from '@/constants';
import PhotoDropzone from '@/components/common/uploadDropzone/PhotoDropzone';
import { PATH_MAIN } from '@/routes/paths';
import { useCreateMovieMutation, useUpdateMovieMutation } from '@/api/movies/moviesApi';
import { editMovieSchema } from './editMovieSchema';

export interface IEditMovieValues {
  [EditMovieFields.TITLE]: string;
  [EditMovieFields.PUBLISH_YEAR]: string;
  [EditMovieFields.PHOTO]: File | null | undefined;
}

interface IEditMovieFormProps {
  movie?: IMovie;
}

const defaultValues: IEditMovieValues = {
  [EditMovieFields.TITLE]: '',
  [EditMovieFields.PUBLISH_YEAR]: '',
  [EditMovieFields.PHOTO]: null,
};

const EditMovieForm = ({ movie }: IEditMovieFormProps) => {
  const router = useRouter();
  const { breakpoints, palette } = useTheme();
  const { id } = router.query;

  const isNewMovie = useMemo(() => id === 'new', [id]);

  const methods = useForm<IEditMovieValues>({
    resolver: yupResolver(editMovieSchema()) as Resolver<IEditMovieValues, unknown>,
    defaultValues,
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { isSubmitting, isValid, isDirty },
  } = methods;

  const [createMovie] = useCreateMovieMutation();
  const [updateMovie] = useUpdateMovieMutation();

  const file = watch(EditMovieFields.PHOTO);

  const title = useMemo(() => (isNewMovie ? t('movies.create') : t('movies.edit')), [isNewMovie]);

  const onSubmit = useCallback(
    async (data: IEditMovieValues) => {
      const formData = new FormData();

      formData.append('title', data[EditMovieFields.TITLE]);
      formData.append('publishYear', data[EditMovieFields.PUBLISH_YEAR]);

      if (data[EditMovieFields.PHOTO]) {
        formData.append('poster', data[EditMovieFields.PHOTO]);
      }

      await (
        isNewMovie ? createMovie(formData) : updateMovie({ movieId: id as string, body: formData })
      )
        .unwrap()
        .then(() => {
          enqueueSnackbar(t('movies.addSuccess'), {
            variant: 'success',
          });
          router.push(PATH_MAIN.MOVIES);
        });
    },
    [id, isNewMovie, router, createMovie, updateMovie]
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length) {
        setValue(EditMovieFields.PHOTO, acceptedFiles[0]);
      }
    },
    [setValue]
  );

  const onCancel = useCallback(() => {
    router.push(PATH_MAIN.MOVIES);
  }, [router]);

  useEffect(() => {
    if (movie) {
      reset({
        [EditMovieFields.TITLE]: movie.title,
        [EditMovieFields.PUBLISH_YEAR]: movie.publishYear,
        [EditMovieFields.PHOTO]: null,
      });
    }
  }, [movie, reset]);

  return (
    <Box
      sx={{
        padding: '120px',
        width: '100%',
        [breakpoints.down('sm')]: {
          padding: '80px 24px',
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: '120px',
          [breakpoints.down('sm')]: {
            textAlign: 'center',
          },
        }}
      >
        {title}
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', sm: 'row' },
            gap: 2,
            width: '100%',
          }}
        >
          <Box
            sx={{
              width: '100%',
              minWidth: { xs: '0', sm: '400px' },
              maxWidth: { xs: '100%', sm: '475px' },
              height: '500px',
              maxHeight: '500px',
              mb: '120px',
              [breakpoints.down('sm')]: {
                mb: 5,
              },
            }}
          >
            <PhotoDropzone
              onDrop={onDrop}
              value={file || null}
              maxFileSize={MAX_AVATAR_SIZE}
              containerStyle={{
                height: '100%',
                maxHeight: '100%',
              }}
              previewBorderRadius="0px"
              previewWidth="100%"
              previewObjectFit="cover"
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
              maxWidth: '380px',
              [breakpoints.down('sm')]: {
                width: '100%',
                maxWidth: '100%',
              },
            }}
          >
            <RHFOutlinedInput
              name={EditMovieFields.TITLE}
              type="text"
              placeholder={t('inputs.title')}
              fullWidth
            />
            <RHFOutlinedInput
              name={EditMovieFields.PUBLISH_YEAR}
              type="text"
              placeholder={t('inputs.year')}
              fullWidth
            />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 2,
                [breakpoints.down('sm')]: {
                  display: 'none',
                },
              }}
            >
              <Button
                variant="outlined"
                onClick={onCancel}
                sx={{ border: `1px solid ${palette.common.white}`, padding: '16px 55px' }}
                disabled={isSubmitting}
              >
                {t('common.cancel')}
              </Button>
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting || !isValid || !isDirty}
                sx={{ padding: '16px 59px' }}
              >
                {t('common.submit')}
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
            width: '100%',
            mt: 5,
            [breakpoints.up('sm')]: {
              display: 'none',
            },
          }}
        >
          <Button
            variant="outlined"
            onClick={onCancel}
            disabled={isSubmitting}
            sx={{
              border: `1px solid ${palette.common.white}`,
              minWidth: '50%',
              '&:hover': {
                border: `1px solid transparent !important`,
                color: palette.common.white,
              },
            }}
          >
            {t('common.cancel')}
          </Button>
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting || !isValid || !isDirty}
            sx={{ minWidth: '50%' }}
          >
            {t('common.submit')}
          </Button>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default EditMovieForm;
