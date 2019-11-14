export const VALIDATE_CODE = "VALIDATE_CODE";

export const validateCode = code => ({
  type: VALIDATE_CODE,
  payload: { code }
});
