export const VALIDATE_CODE = "VALIDATE_CODE";
export const VALIDATE_CODE_RESPONSE = "VALIDATE_CODE_RESPONSE";

export const validateCode = code => ({
  type: VALIDATE_CODE,
  payload: { code }
});
