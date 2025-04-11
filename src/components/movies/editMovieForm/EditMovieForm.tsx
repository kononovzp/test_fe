import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Grid, useTheme } from '@mui/material';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { t } from 'i18next';

import { FormProvider, RHFOutlinedInput } from '@/components/hook-form';
import { IMovie } from '@/models/movies';
import { EditMovieFields, MAX_AVATAR_SIZE } from '@/constants';
import PhotoDropzone from '@/components/uploadDropzone/PhotoDropzone';
import { PATH_MAIN } from '@/routes/paths';
import { editMovieSchema } from './editMovieSchema';
import { useCreateMovieMutation } from '@/api/movies/moviesApi';
import { enqueueSnackbar } from 'notistack';

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

  const file = watch(EditMovieFields.PHOTO);

  const onSubmit = async (data: IEditMovieValues) => {
    const formData = new FormData();

    formData.append('title', data[EditMovieFields.TITLE]);
    formData.append('publishYear', data[EditMovieFields.PUBLISH_YEAR]);

    if (data[EditMovieFields.PHOTO]) {
      formData.append('poster', data[EditMovieFields.PHOTO]);
    }
    await createMovie(formData)
      .unwrap()
      .then(() => {
        enqueueSnackbar(t('movies.addSuccess'), {
          variant: 'success',
        });
      });
  };

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length) {
      setValue(EditMovieFields.PHOTO, acceptedFiles[0]);
    }
  };

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
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={1}
          sx={{
            [breakpoints.down('sm')]: {
              flexDirection: 'column-reverse',
            },
          }}
        >
          <Grid size={{ sm: 12, md: 6 }}>
            <Box width="100%">
              <PhotoDropzone
                onDrop={onDrop}
                value={file || null}
                maxFileSize={MAX_AVATAR_SIZE}
                containerStyle={{
                  height: '500px',
                  maxHeight: '500px',
                  [breakpoints.down('sm')]: {
                    width: '100%',
                    maxHeight: '372px',
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid
            size={{ sm: 12, md: 6 }}
            sx={{
              [breakpoints.down('sm')]: {
                justifyContent: 'center',
              },
            }}
          >
            <Box
              width="100%"
              maxWidth="380px"
              sx={{
                [breakpoints.down('sm')]: {
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
            </Box>
            <Box
              width="100%"
              maxWidth="380px"
              sx={{
                [breakpoints.down('sm')]: {
                  maxWidth: '100%',
                },
              }}
            >
              <RHFOutlinedInput
                name={EditMovieFields.PUBLISH_YEAR}
                type="text"
                placeholder={t('inputs.year')}
                fullWidth
              />
            </Box>
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
          </Grid>
        </Grid>
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
                border: `1px solid transparent`,
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
