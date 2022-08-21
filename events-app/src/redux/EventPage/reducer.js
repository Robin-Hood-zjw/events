import ActionTypes from "./constants";

const initialState = {
  ID: "",
  events: "",
  status: false,
};

export const EventsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_EVENTS:
      return {
        ...state,
        status: true,
      };
    case ActionTypes.SUCCESS_FETCH_EVENTS:
      return {
        ...state,
        event: payload,
        status: true,
      };
    case ActionTypes.FAIL_FETCH_EVENTS:
      return {
        ...state,
        event: payload,
        status: false,
      };
    default:
      return state;
  }
};
