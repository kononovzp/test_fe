function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

export const ROOT_AUTH = '/auth';
export const ROOT_MOVIES = '/movies';

export const PATH_AUTH = {
  ROOT: ROOT_AUTH,
  LOGIN: path(ROOT_AUTH, '/login'),
  REGISTER: path(ROOT_AUTH, '/register'),
};

export const PATH_MAIN = {
  ROOT: ROOT_MOVIES,
  MOVIES: path(ROOT_MOVIES, '/'),
  MOVIES_NEW: path(ROOT_MOVIES, '/new'),
  MOVIES_EDIT: path(ROOT_MOVIES, '/:id'),
};
