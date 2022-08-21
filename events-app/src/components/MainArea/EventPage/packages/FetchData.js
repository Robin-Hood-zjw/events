import axios from "axios";

const EVENTS_URL = "https://601caf791a9c220017060c02.mockapi.io/api/v1/Events";

export const fetchData = async ({ date, eventId }) => {
  try {
    let params = [];
    let URL = EVENTS_URL;

    if (date) params.push(`date=${date}`);
    if (eventId) params.push(`eventId=${eventId}`);

    for (let idx = 0; idx < params.length; idx++) {
      URL = idx === 0 ? `${URL}?${params[idx]}` : `${URL}&${params[idx]}`;
    }

    const response = await axios.get(URL);
    return response;
  } catch (err) {
    throw err;
  }
};
