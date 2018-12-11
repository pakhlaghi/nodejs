import { SHOW_SPINNER } from "./types";

export const showSpinner = status => ({
  type: SHOW_SPINNER,
  payload: {
    status
  }
});
