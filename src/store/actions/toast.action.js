export const TOAST_SHOW = "TOAST_SHOW";
export const TOAST_HIDE = "TOAST_HIDE";

export const showToast = options => ({
  type: TOAST_SHOW,
  payload: options
});
