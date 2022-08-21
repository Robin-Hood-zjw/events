import { SET_SIDER_BAR } from "./constants";

const initialState = {
  status: "",
};

const SiderBarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SIDER_BAR:
      return {
        ...state,
        status: payload,
      };
    default:
      return state;
  }
};

export default SiderBarReducer;
