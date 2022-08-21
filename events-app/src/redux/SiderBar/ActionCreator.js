import { SET_SIDER_BAR } from "./constants";

const setSiderBar = (products) => {
  return {
    type: SET_SIDER_BAR,
    payload: products,
  };
};

export default setSiderBar;
