export const SYSTEM_UPDATE_INTERNET_STATUS = "SYSTEM_UPDATE_INTERNET_STATUS";
export const SYSTEM_UPDATE_SERVER_STATUS = "SYSTEM_UPDATE_SERVER_STATUS";

export const systemUpdateInternetStatus = status => ({
  type: SYSTEM_UPDATE_INTERNET_STATUS,
  payload: {
    hasInternetConnection: status
  }
});

export const systemUpdateServerStatus = status => ({
  type: SYSTEM_UPDATE_SERVER_STATUS,
  payload: {
    hasAccessToServer: status
  }
});
