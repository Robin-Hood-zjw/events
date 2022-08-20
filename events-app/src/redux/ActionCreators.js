export const fetchEvents = (product) => {
  type: "FETCH_EVENTS";
  payload: product;
};

export const fetchSuccessEvents = (product) => {
  type: "SUCCESS_FETCH_EVENTS";
  payload: product;
};

export const fetchFailEvents = (product) => {
  type: "FAIL_FETCH_EVENTS";
  payload: product;
};
