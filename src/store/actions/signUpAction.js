export const VALIDATE_CODE = "VALIDATE_CODE";
export const VALID_CODE = "VALID_CODE";
export const INVALID_CODE = "INVALID_CODE";
export const RESTORE_CODE = "RESTORE_CODE";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_RESULT = "SIGNUP_RESULT";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export const validateCode = code => ({
  type: VALIDATE_CODE,
  payload: { code }
});

export const invalidCode = code => ({
  type: VALIDATE_CODE,
  payload: { code }
});

export const restoreCode = () => ({
  type: RESTORE_CODE,
  payload: {}
});

export const startSignUp = data => ({
  type: SIGNUP_START,
  payload: { ...data }
});
