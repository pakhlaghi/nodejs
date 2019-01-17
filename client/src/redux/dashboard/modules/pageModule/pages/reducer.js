import { SHOW_SPINNER, LINK_TO_NEW_PAGE } from "./types";

export default (
  state = {
    data: [
      { id: 1, name: "page1" },
      { id: 2, name: "page2" },
      { id: 3, name: "page3" }
    ],

    fields: [
      { id: "id", numeric: true, disablePadding: false, label: "Page ID" },
      { id: "name", numeric: false, disablePadding: false, label: "Page Name" }
    ],
    title: "Pages"
  },
  action
) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return showSpinner(state, action);
    case LINK_TO_NEW_PAGE:
      return linkToNewPage(state, action);
  }
  return state;
};

export const showSpinner = (state, action) => {
  return { ...state, showSpinner: action.payload.status };
};

export const linkToNewPage = (state, action) => {
  action.payload.history.push("newPage");

  return { ...state };
};
