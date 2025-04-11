export const EMAIL_REG_EXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

export const PASSWORD_REG_EXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9\s]).+$/;

export const MIN_PASSWORD_LENGHT: number = 8;
export const MIN_ONE_PASSWORD_LENGTH: number = 6;

export const MAX_TITLE_LENGTH: number = 250;
export const MAX_NAME_LENGTH: number = 50;

export const MAX_AVATAR_SIZE = 5 * 1024 * 1024; // 5MB
export const AVATAR_SUPPORTED_FORMATS = ['image/jpeg', 'image/png'];

export const INPUT_PROPS = {
  type: 'phone',
};

export const PHONE_MASK = '(999) 999-9999';
