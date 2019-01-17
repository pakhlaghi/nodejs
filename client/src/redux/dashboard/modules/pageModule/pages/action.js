import { SHOW_SPINNER, LINK_TO_NEW_PAGE } from "./types";
import { dataService } from "../../../../../service/dataService";

export const showSpinner = status => ({
  type: SHOW_SPINNER,
  payload: {
    status
  }
});

export const linkToNewPage = history => ({
  type: LINK_TO_NEW_PAGE,
  payload: {
    history
  }
});

// async: ------------------------------------------------------------------------
// call this first => resolve will call action with type
// no type is required
