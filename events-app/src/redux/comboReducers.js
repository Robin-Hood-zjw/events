import { combineReducers } from "redux";
import { EventsReducer } from "./EventPage/reducer";
import { SiderBarReducer } from "./SiderBar/reducer";

const comboReducers = combineReducers({
  EventsReducer: EventsReducer,
  SiderBarReducer: SiderBarReducer,
});

export default comboReducers;
