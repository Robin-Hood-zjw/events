import {
  FETCH_EVENTS,
  SUCCESS_FETCH_EVENTS,
  FAIL_FETCH_EVENTS,
} from "./constants";

export const fetchEvents = (products) => {
  return { type: FETCH_EVENTS, payload: products };
};

export const fetchSuccessEvents = (products) => {
  return { type: SUCCESS_FETCH_EVENTS, payload: products };
};

export const fetchFailEvents = (products) => {
  return { type: FAIL_FETCH_EVENTS, payload: products };
};
