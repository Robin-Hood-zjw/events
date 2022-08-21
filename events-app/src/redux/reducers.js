import {
  FETCH_EVENTS,
  SUCCESS_FETCH_EVENTS,
  FAIL_FETCH_EVENTS,
} from "./constants";

const initialState = {
  event: "",
  status: false,
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        status: true,
      };
    case SUCCESS_FETCH_EVENTS:
      return {
        ...state,
        event: action.payload,
        status: true,
      };
    case FAIL_FETCH_EVENTS:
      return {
        ...state,
        event: action.payload,
        status: false,
      };
    default:
      return state;
  }
};
