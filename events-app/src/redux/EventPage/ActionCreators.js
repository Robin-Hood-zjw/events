import ActionTypes from "./constants";

export const fetchEvents = (products) => {
  return { type: ActionTypes.FETCH_EVENTS, payload: products };
};

export const fetchSuccessEvents = (products) => {
  return { type: ActionTypes.SUCCESS_FETCH_EVENTS, payload: products };
};

export const fetchFailEvents = (products) => {
  return { type: ActionTypes.FAIL_FETCH_EVENTS, payload: products };
};
